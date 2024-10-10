from flask import Blueprint, jsonify, abort, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt_identity
from model.user import User
from database.db import db
from flask_bcrypt import Bcrypt
import base64

user_api = Blueprint('user_api', __name__)
bcrypt = Bcrypt()


@user_api.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    return jsonify(logged_in_as=current_user_id), 200


@user_api.route('/login', methods=['POST'])
def login():
    if not request.json or 'email' not in request.json or 'password' not in request.json:
        abort(400, description="Missing required fields")

    email = request.json['email']
    password = request.json['password']
    user = User.query.filter_by(email=email).first()

    if user is None:
        abort(401, description="User not found or invalid email")

    if not user.check_password(password):
        abort(401, description="Invalid password")

    access_token = create_access_token(identity=user.id, additional_claims={
                                       "is_admin": user.is_admin})

    return jsonify(access_token=access_token, is_admin=user.is_admin), 200


@user_api.route('/register', methods=['POST'])
def create_user():

    if not request.json or 'email' not in request.json or 'password' not in request.json:
        abort(400, description="Missing required fields")

    email = request.json['email']
    if '@' not in email:
        abort(400, description="Invalid email format")

    if User.query.filter_by(email=email).first():
        abort(409, description="Email already exists")

    user = User(
        email=email,
        password=request.json['password'],
        is_admin=request.json.get('is_admin', False),
        password_hash=request.json.get('password_hash', ''),
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
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "User created successfully", "welcome": user.first_name}), 201


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
    user.first_name = request.json.get(
        'first_name', user.first_name)
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

    # Los siguientes campos NO deben ser actualizables por el usuario, por lo tanto los excluimos:
    # user.is_admin
    # user.password_hash

    db.session.commit()

    return jsonify({"msg": "User updated successfully"}), 200


@ user_api.route('/user', methods=['GET'])
def get_users():

    users = User.query.all()
    if not users:
        abort(404, description="No users found")
    return jsonify([user.to_dict() for user in users]), 200
