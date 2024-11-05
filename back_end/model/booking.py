from model.base import Base
from database.db import db
from database.firebase_config import firedb
from sqlalchemy import Column, String, Boolean, Float, ForeignKey
from sqlalchemy.orm import relationship
import os


class Booking(Base):
    job_id = Column(String, ForeignKey("job.id"), nullable=False)
    resume_id = Column(String, ForeignKey("resume.id"), nullable=True)
    user_id = Column(String, ForeignKey("user.id"), nullable=False)
    status = Column(Boolean, default=False)
    offer_price = Column(
        Float(100), ForeignKey("job.pay"), nullable=True)
    final_price = Column(Float(100), nullable=True)
    # relaciones
    resume = relationship("Resume", back_populates="bookings")
    user = relationship("User", back_populates="bookings")
    job = relationship(
        "Job", back_populates="bookings", foreign_keys=[job_id])

    def __init__(self, job_id, user_id, status, offer_price, resume_id, final_price, **kwargs):
        super().__init__(**kwargs)
        self.job_id = job_id
        self.resume_id = resume_id
        self.user_id = user_id
        self.status = status
        self.offer_price = offer_price
        self.final_price = final_price

    def __str__(self):
        return f"[Booking] ({self.id}) {self.to_dict()}"

    def to_dict(self):
        return {
            "id": self.id,
            "job_id": self.job_id,
            "user_id": self.user_id,
            "status": self.status,
            "offer_price": self.offer_price,
            "final_price": self.final_price,
            "resume_id": self.resume_id,
        }

    def save(self):
        if os.environ.get("ENV") == "production":
            job_ref = firedb.collection("jobs").document(str(self.id))
            job_ref.set(self.to_dict())
        else:
            db.session.add(self)
            db.session.commit()
