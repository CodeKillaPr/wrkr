from flask import Blueprint, jsonify, abort, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from model.user import User
from model.resume import Resume
from database.db import db
from flask_bcrypt import Bcrypt
import base64
from database.firebase_config import firedb
import uuid

user_api = Blueprint('user_api', __name__)
bcrypt = Bcrypt()


@user_api.route('/register', methods=['POST'])
def create_user():
    if not request.json or 'email' not in request.json or 'password' not in request.json:
        abort(400, description="Missing required fields")

    email = request.json['email']
    if '@' not in email:
        abort(400, description="Invalid email format")

    if User.query_by_email(email):
        abort(409, description="Email already exists")

    user = User(
        id=str(uuid.uuid4()),
        email=email,
        password=request.json['password'],
        is_admin=request.json.get('is_admin', False),
        first_name=request.json.get('first_name', ''),
        last_name=request.json.get('last_name', ''),
        card_id=request.json.get('card_id', None),
        contact=request.json.get('contact', ''),
        resume=base64.b64decode(request.json.get('resume', '').encode(
            'utf-8')) if request.json.get('resume') else b'',
        picture=base64.b64decode(request.json.get('picture', '').encode(
            'utf-8')) if request.json.get('picture') else b'',
        certification=base64.b64decode(request.json.get('certification', '').encode(
            'utf-8')) if request.json.get('certification') else b'',
    )
    user.save()

    if firedb:
        user_data = {
            "id": user.id,
            "is_admin": user.is_admin,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "contact": user.contact,
            "resume": base64.b64encode(user.resume).decode('utf-8') if user.resume else None,
            "picture": base64.b64encode(user.picture).decode('utf-8') if user.picture else None,
            "certification": base64.b64encode(user.certification).decode('utf-8') if user.certification else None,
            "password_hash": user.password_hash
        }

        firedb.collection('users').document(str(user.email)).set(user_data)

    return jsonify({"msg": "User created successfully", "welcome": user.first_name}), 201


@user_api.route('/login', methods=['POST'])
def login():
    if not request.json or 'email' not in request.json or 'password' not in request.json:
        abort(400, description="Missing required fields")

    email = request.json['email']
    password = request.json['password']
    user = User.query_by_email(email)

    if user is None:
        abort(401, description="User not found or invalid email")

    # Asegúrate de que `user` es una instancia de User
    if isinstance(user, dict):
        # Extrae los campos correctos del diccionario
        user_fields = {
            'id': user.get('id'),
            'email': user.get('email'),
            'password_hash': user.get('password_hash'),
            'is_admin': user.get('is_admin', False),
            'first_name': user.get('first_name', ''),
            'last_name': user.get('last_name', ''),
            'card_id': user.get('card_id'),
            'resume': base64.b64decode(user.get('resume').encode('utf-8')) if user.get('resume') else None,
            'picture': base64.b64decode(user.get('picture').encode('utf-8')) if user.get('picture') else None,
            'certification': base64.b64decode(user.get('certification').encode('utf-8')) if user.get('certification') else None
        }
        user = User(**user_fields)

    if not user.check_password(password):
        abort(401, description="Invalid password")

    additional_claims = {"is_admin": user.is_admin}
    access_token = create_access_token(
        identity=user.id, additional_claims=additional_claims)

    return jsonify(access_token=access_token, is_admin=user.is_admin), 200


@user_api.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    return jsonify(logged_in_as=current_user_id), 200


@user_api.route('/user/update', methods=['PUT'])
@jwt_required()
def update_user():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        abort(404, description="User not found")

    if not request.json:
        abort(400, description="Missing required fields")

    user.email = request.json.get('email', user.email)
    user.first_name = request.json.get('first_name', user.first_name)
    user.last_name = request.json.get('last_name', user.last_name)
    user.contact = request.json.get('contact', user.contact)

    # Decodifica y actualiza el currículum, imagen y certificación, si se proporcionan
    user.resume = base64.b64decode(request.json.get('resume', '').encode(
        'utf-8')) if request.json.get('resume') else user.resume
    user.picture = base64.b64decode(request.json.get('picture', '').encode(
        'utf-8')) if request.json.get('picture') else user.picture
    user.certification = base64.b64decode(request.json.get('certification', '').encode(
        'utf-8')) if request.json.get('certification') else user.certification

    # Si el usuario proporciona una nueva contraseña, se debe cifrar antes de actualizarla
    if 'password' in request.json:
        user.password = bcrypt.generate_password_hash(
            request.json['password']).decode('utf-8')

    db.session.commit()

    return jsonify({"msg": "User updated successfully"}), 200


@user_api.route('/resume', methods=['POST'])
@jwt_required()
def create_resume():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        abort(404, description="User not found")

    if not request.json or 'title' not in request.json or 'description' not in request.json:
        abort(400, description="Missing required fields")

    resume = Resume(
        user_id=user_id,
        title=request.json['title'],
        description=request.json['description'],
        job_titles=request.json.get('job_titles', ''),
        skills=request.json.get('skills', ''),
        education=request.json.get('education', '')
    )
    resume.save()

    if firedb:
        resume_data = {
            "user_id": resume.user_id,
            "title": resume.title,
            "description": resume.description,
            "job_titles": resume.job_titles,
            "skills": resume.skills,
            "education": resume.education,
            "created_at": resume.created_at,
            "updated_at": resume.updated_at
        }

        firedb.collection('resumes').document(str(resume.id)).set(resume_data)

    return jsonify({"msg": "Resume created successfully", "resume": resume.to_dict()}), 201
