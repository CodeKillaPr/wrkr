from model.base import Base
from database.db import db
from database.firebase_config import firedb
import os


class Booking(Base):
    job_id = db.Column(db.String, db.ForeignKey('job.id'), nullable=False)
    user_id = db.Column(db.String, db.ForeignKey('user.id'), nullable=False)
    status = db.Column(db.Boolean, default=False)
    offer_price = db.Column(
        db.Float(100), db.ForeignKey('job.pay'), nullable=False)
    final_price = db.Column(db.Float(100), nullable=False)

    user = db.relationship('User', back_populates='bookings')
    job = db.relationship(
        'Job', back_populates='bookings', foreign_keys=[job_id])

    def __init__(self, job_id, user_id, status, offer_price, final_price, **kwargs):
        super().__init__(**kwargs)
        self.job_id = job_id
        self.user_id = user_id
        self.status = status
        self.offer_price = offer_price
        self.final_price = final_price

    def __str__(self):
        return f"[Booking] ({self.id}) {self.to_dict()}"

    def to_dict(self):
        return {
            'id': self.id,
            'job_id': self.job_id,
            'user_id': self.user_id,
            'status': self.status,
            'offer_price': self.offer_price,
            'final_price': self.final_price
        }

    def save(self):
        if os.environ.get('ENV') == 'production':
            job_ref = firedb.collection('jobs').document(str(self.id))
            job_ref.set(self.to_dict())
        else:
            db.session.add(self)
            db.session.commit()
