from flask import Blueprint, jsonify, abort, request
from model.user import User
from model.booking import Booking
from model.job import Job
from database.db import db
from flask_bcrypt import Bcrypt
from database.firebase_config import firedb
from flask_jwt_extended import get_jwt, jwt_required, get_jwt_identity
import os

booking_api = Blueprint('booking_api', __name__)
bcrypt = Bcrypt()


@booking_api.route('/booking', methods=['POST'])
@jwt_required()
def create_booking():
    # if not request.json or 'user_id' not in request.json or 'job_id' not in request.json:
    #     abort(400, description="Missing required fields")

    user_id = get_jwt_identity()
    job_id = request.json.get('job_id')

    if not User.query.get(user_id):
        abort(404, description="User not found")

    if not Job.query.get(job_id):
        abort(404, description="Job not found")

    offer_price = request.json.get('offer_price', 0)
    final_price = request.json.get('final_price')

    booking = Booking(
        job_id=job_id,
        user_id=user_id,
        status=False,
        offer_price=offer_price,
        final_price=final_price
    )
    booking.save()

    if firedb:
        booking_data = {
            "id": booking.id,
            "job_id": booking.job_id,
            "user_id": booking.user_id,
            "status": booking.status,
            "offer_price": booking.offer_price,
            "final_price": booking.final_price
        }

        firedb.collection('bookings').document(
            str(booking.id)).set(booking_data)

    print(booking.job)
    print(booking.job.description)
    return jsonify({"msg": "Booking created successfully"}), 201
