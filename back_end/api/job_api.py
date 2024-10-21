from flask_jwt_extended import jwt_required
from model.job import Job
from database.db import db
from flask import Blueprint, jsonify, abort, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from database.firebase_config import firedb
import os

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
        finalized_jobs=False   # Si deseas que todos los trabajos sean no finalizados por defecto
    )
    new_job.save()

    if firedb:
        job_data = {
            "id": new_job.id,
            "title": new_job.title,
            "description": new_job.description,
            "pay": new_job.pay,
            "location": new_job.location,
            "time_frame": new_job.time_frame,
            "user_id": new_job.user_id,
            "finalized_jobs": new_job.finalized_jobs,
            "open_jobs": new_job.open_jobs
        }

        firedb.collection('jobs').document(str(new_job.id)).set(job_data)
    return jsonify({"msg": "Job created successfully", "job": new_job.to_dict()}), 201


@job_api.route('/jobs', methods=['GET'])
def get_jobs():
    if os.environ.get('ENV') == 'production' and firedb:
        jobs_ref = firedb.collection('jobs')
        jobs_docs = jobs_ref.get()
        jobs_data = [job.to_dict() for job in jobs_docs]
    else:
        jobs = Job.query.all()
        jobs_data = [job.to_dict() for job in jobs]

    return jsonify({"jobs": jobs_data}), 200


# @job_api.route('/jobs/<job_id>', methods=['GET'])
# @jwt_required()
# def get_job(job_id):
#     job_data = None

# # sencillo bebo esto se comunica primero a firebase y busca un jobs por id si existe lo devuelve
# # y si esta en modo desarrollo busca en la base de datos sql
#     if os.environ.get('ENV') == 'production' and firedb:
#         job_ref = firedb.collection('jobs').document(job_id)
#         job_snapshot = job_ref.get()
#         if job_snapshot.exists:
#             job_data = job_snapshot.to_dict()
#         else:
#             abort(404, description="Job not found in Firestore")
#     else:
#         job = Job.query.get(job_id)
#         if job:
#             job_data = job.to_dict()
#         else:
#             abort(404, description="Job not found in SQL database")

#     return jsonify({"job": job_data}), 200


@job_api.route('/job_count', methods=['GET'])
def get_job_count():
    if os.environ.get('ENV') == 'production' and firedb:
        jobs_ref = firedb.collection('jobs')
        job_count = len(jobs_ref.get())
    else:
        job_count = Job.query.count()

    return jsonify({"job_count": job_count}), 200
