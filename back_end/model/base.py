import uuid
from datetime import datetime
from database.db import db


class Base(db.Model):
    __abstract__ = True
    id = db.Column(db.String(60), primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now())

    def __init__(self, id=None, created_at=None, updated_at=None):
        self.id = id or str(uuid.uuid4())
        self.created_at = created_at or datetime.now()
        self.updated_at = updated_at or datetime.now()

    def save(self):
        self.updated_at = datetime.now()

    def to_dict(self):
        return self.__dict__
