from flask import Blueprint, jsonify, abort, request
from model.user import User
from model.booking import Booking
from model.job import Job
from database.db import db
from flask_bcrypt import Bcrypt

booking_api = Blueprint('booking_api', __name__)
bcrypt = Bcrypt()


@booking_api.route('/booking', methods=['POST'])
def create_booking():

    if not request.json or 'user_id' not in request.json or 'job_id' not in request.json:
        abort(400, description="Missing required fields")

    user_id = request.json['user_id']
    job_id = request.json['job_id']

    if not User.query.get(user_id):
        abort(404, description="User not found")

    if not Job.query.get(job_id):
        abort(404, description="Job not found")

    booking = Booking(
        job_id=job_id,
        user_id=user_id,
        status=request.json.get('status'),
        offer_price=request.json.get('offer_price'),
        final_price=request.json.get('final_price')
    )
    db.session.add(booking)
    db.session.commit()
    print(booking.job)
    print(booking.job.description)
    return jsonify({"msg": "Booking created successfully"}), 201


@booking_api.route('/booking', methods=['GET'])
def get_all_bookings():
    bookings = Booking.query.all()
    return jsonify([booking.to_dict() for booking in bookings]), 200
