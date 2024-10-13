from model.job import Job
from database.db import db
from flask import Blueprint, jsonify, abort, request
from flask_jwt_extended import get_jwt, jwt_required, get_jwt_identity

job_api = Blueprint('job_api', __name__)


@job_api.route('/jobs', methods=['POST'])
@jwt_required()
def create_job():
    if not request.json:
        abort(400, description="Missing JSON data")

    title = request.json.get('title')
    description = request.json.get('description')
    pay = request.json.get('pay', 0)  # Valor por defecto si no se proporciona
    location = request.json.get('location')
    time_frame = request.json.get('time_frame')
    user_id = get_jwt_identity()  # Obtener el ID del usuario autenticado

    # Validaciones
    if not title or not user_id:
        abort(400, description="Title and user ID are required")

    # Crear nueva instancia de Job
    new_job = Job(
        user_id=user_id,
        title=title,
        description=description,
        pay=pay,
        location=location,
        time_frame=time_frame,
        open_jobs=True,  # Si deseas que todos los trabajos sean abiertos por defecto
    )

    db.session.add(new_job)
    db.session.commit()

    return jsonify({"msg": "Job created successfully", "job": new_job.to_dict()}), 201


@job_api.route('/job_count', methods=['GET'])
def get_job_count():
    job_count = Job.query.count()
    return jsonify({"job_count": job_count}), 200
