import os
from model.base import Base
from database.db import db
from database.firebase_config import firedb


class Job(Base):
    user_id = db.Column(db.String, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(128), nullable=False)
    description = db.Column(db.String(128), nullable=True)
    pay = db.Column(db.Float, nullable=True)
    location = db.Column(db.String(128), nullable=True)
    time_frame = db.Column(db.String(128), nullable=True)
    open_jobs = db.Column(db.Boolean, default=True)
    finalized_jobs = db.Column(db.Boolean, default=False)

    user = db.relationship('User', back_populates='jobs')
    bookings = db.relationship(
        'Booking', back_populates='job', foreign_keys='Booking.job_id')

    def __init__(self, user_id, title, description, pay, location, time_frame, open_jobs, finalized_jobs, **kwargs):
        super().__init__(**kwargs)
        self.user_id = user_id
        self.title = title
        self.description = description
        self.pay = pay
        self.location = location
        self.time_frame = time_frame
        self.open_jobs = open_jobs
        self.finalized_jobs = finalized_jobs

    def __str__(self):
        return f"[Job] ({self.id}) {self.to_dict()}"

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "user_first_name": self.user.first_name,
            "user_last_name": self.user.last_name,
            "title": self.title,
            "description": self.description,
            "pay": self.pay,
            "location": self.location,
            "time_frame": self.time_frame,
            "open_jobs": self.open_jobs,
            "finalized_jobs": self.finalized_jobs
        }

    def save(self):
        if os.environ.get('ENV') == 'production':
            job_ref = firedb.collection('jobs').document(str(self.id))
            job_ref.set(self.to_dict())
        else:
            db.session.add(self)
            db.session.commit()
