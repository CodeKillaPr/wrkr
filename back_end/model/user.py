import os
import base64
from database.firebase_config import firedb
from database.db import db
from flask_bcrypt import Bcrypt
from sqlalchemy import Column, String, Boolean, LargeBinary, Integer
from sqlalchemy.orm import relationship
import uuid

bcrypt = Bcrypt()


class User(db.Model):
    __tablename__ = 'user'
    id = Column(String, primary_key=True, default=lambda: str(
        uuid.uuid4()))  # Generar UUID
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    is_admin = Column(Boolean, default=False)
    card_id = Column(String, nullable=True)
    first_name = Column(String, nullable=True)
    last_name = Column(String, nullable=True)
    resume = Column(LargeBinary, nullable=True)
    contact = Column(String, nullable=True)
    picture = Column(LargeBinary, nullable=True)
    certification = Column(LargeBinary, nullable=True)

    # Definir la relación con Job
    jobs = relationship('Job', back_populates='user')
    # Definir la relación con Booking
    bookings = relationship('Booking', back_populates='user')

    def __init__(self, id, email, password=None, password_hash=None, is_admin=False, card_id=None, resume=None, contact=None, picture=None, certification=None, first_name="", last_name=""):

        self.id = id
        self.email = email
        self.is_admin = is_admin
        self.card_id = card_id
        self.first_name = first_name
        self.last_name = last_name
        self.resume = resume
        self.contact = contact
        self.picture = picture
        self.certification = certification

        if password_hash:
            self.password_hash = password_hash
        elif password:
            self.password_hash = bcrypt.generate_password_hash(
                password).decode('utf-8')
        else:
            raise ValueError(
                "Debe proporcionarse 'password' o 'password_hash'")

    def save(self):
        if os.environ.get('ENV') == 'production':
            user_ref = firedb.collection('users').document(self.email)
            user_ref.set(self.to_dict())
        else:
            db.session.add(self)
            db.session.commit()

    @staticmethod
    def query_by_email(email):
        if os.environ.get('ENV') == 'production':
            user_ref = firedb.collection('users').document(email)
            doc = user_ref.get()
            if doc.exists:
                return doc.to_dict()
            return None
        else:
            return User.query.filter_by(email=email).first()

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'card_id': self.card_id,
            'contact': self.contact,
            'resume': base64.b64encode(self.resume).decode('utf-8') if self.resume else None,
            'picture': base64.b64encode(self.picture).decode('utf-8') if self.picture else None,
            'certification': base64.b64encode(self.certification).decode('utf-8') if self.certification else None,
        }
