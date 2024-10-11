from model.job import Job
from database.db import db
from flask import Blueprint, jsonify, abort, request

job_api = Blueprint('job_api', __name__)


@job_api.route('/job', methods=['POST'])
def create_job():

    if not request.json or 'title' not in request.json or 'description' not in request.json:
        abort(400, description="Missing required fields")

    job = Job(
        user_id=request.json['user_id'],
        title=request.json['title'],
        description=request.json['description'],
        pay=request.json.get('pay'),
        location=request.json.get('location'),
        time_frame=request.json.get('time_frame'),
        open_jobs=request.json.get('open_jobs', True)
    )

    db.session.add(job)
    db.session.commit()
    return jsonify({"msg": "Job created successfully", "title": job.title}), 201


@job_api.route('/job_count', methods=['GET'])
def get_job_count():
    job_count = Job.query.count()
    return jsonify({"job_count": job_count}), 200
