from model.base import Base
from database.db import db
from flask_bcrypt import Bcrypt
import base64

bcrypt = Bcrypt()


class User(Base):
    password_hash = db.Column(db.String(128))
    password = db.Column(db.String(128), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    email = db.Column(db.String(128), nullable=False, unique=True)
    first_name = db.Column(db.String(128), nullable=True)
    last_name = db.Column(db.String(128), nullable=True)
    card_id = db.Column(db.Integer, unique=True)
    contact = db.Column(db.String(128), nullable=False)
    resume = db.Column(db.LargeBinary, nullable=False)
    picture = db.Column(db.LargeBinary, nullable=False)
    certification = db.Column(db.LargeBinary, nullable=False)

    jobs = db.relationship('Job', back_populates='user')
    bookings = db.relationship('Booking', back_populates='user')

    def __init__(self, email, password, password_hash, is_admin, card_id, resume, contact, picture, certification, first_name="", last_name="", **kwargs):
        super().__init__(**kwargs)
        self.email = email
        self.password = password
        self.is_admin = is_admin
        self.card_id = card_id
        self.password_hash = password_hash
        self.first_name = first_name
        self.last_name = last_name
        self.resume = resume
        self.contact = contact
        self.picture = picture
        self.certification = certification
        self.password_hash = bcrypt.generate_password_hash(
            password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def __str__(self):
        return f"[User] ({self.id}) {self.to_dict()}"

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
