from database.db import db
from model.base import Base
from sqlalchemy.orm import relationship
import os
from database.firebase_config import firedb
from sqlalchemy import Column, Integer, ForeignKey, String, Text


class Resume(db.Model):
    __tablename__ = "resume"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    title = Column(String(100))
    description = Column(String(1000))
    job_titles = Column(Text)  # Títulos de trabajo
    skills = Column(Text)  # Habilidades
    education = Column(Text)  # Educación

    user = relationship("User", back_populates="resumes",
                        foreign_keys=[user_id])
    bookings = relationship("Booking", back_populates="resume")

    def __init__(self, user_id, title, description, job_titles="", skills="", education="", **kwargs):
        super().__init__(**kwargs)
        self.user_id = user_id
        self.title = title
        self.description = description
        self.job_titles = job_titles
        self.skills = skills
        self.education = education

    def __repr__(self):
        return f"<Resume {self.id}>"

    def save(self):
        if os.environ.get("ENV") == "production":
            resume_ref = firedb.collection("resumes").document(str(self.id))
            resume_ref.set(self.to_dict())
        else:
            db.session.add(self)
            db.session.commit()

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "user_first_name": self.user.first_name,
            "user_last_name": self.user.last_name,
            "description": self.description,
            "job_titles": self.job_titles,
            "skills": self.skills,
            "education": self.education,
        }
