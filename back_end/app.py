from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from api.user_api import user_api
from api.job_api import job_api
from api.booking_api import booking_api
from database.db import db
from flask import Flask
import os


app = Flask(__name__)
CORS(app)


class Config(object):
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY', 'super-secret')
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DEV_SQLALCHEMY_DATABASE_URI', 'sqlite:///development.db')


class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):
    DEBUG = False


# Rutas de los api con blueprint
app.register_blueprint(user_api)
app.register_blueprint(job_api)
app.register_blueprint(booking_api)

environment_config = DevelopmentConfig if os.environ.get(
    'ENV') == 'development' else ProductionConfig
app.config.from_object(environment_config)


db.init_app(app)
jwt = JWTManager(app)


with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
