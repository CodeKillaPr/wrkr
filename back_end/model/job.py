from model.base import Base
from database.db import db


class Job(Base):
    user_id = db.Column(db.String, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String(128), nullable=False)
    description = db.Column(db.String(128), nullable=True)
    pay = db.Column(db.Float, nullable=True)
    location = db.Column(db.String(128), nullable=True)
    time_frame = db.Column(db.String(128), nullable=True)
    open_jobs = db.Column(db.Boolean, default=True)

    user = db.relationship('User', back_populates='jobs')
    bookings = db.relationship(
        'Booking', back_populates='job', foreign_keys='Booking.job_id')

    def __init__(self, user_id, title, description, pay, location, time_frame, open_jobs, **kwargs):
        super().__init__(**kwargs)
        self.user_id = user_id
        self.title = title
        self.description = description
        self.pay = pay
        self.location = location
        self.time_frame = time_frame
        self.open_jobs = open_jobs

    def __str__(self):
        return f"[Job] ({self.id}) {self.to_dict()}"

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "pay": self.pay,
            "location": self.location,
            "time_frame": self.time_frame,
            "open_jobs": self.open_jobs,
        }
