import os


class Config(object):
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY', 'super-secret')
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DEV_SQLALCHEMY_DATABASE_URI', 'sqlite:///development.db')


class ProductionConfig(Config):
    DEBUG = False
    FIREBASE_CREDENTIALS_PATH = os.environ.get('FIREBASE_CREDENTIALS_PATH')
    FIREBASE_DATABASE_URL = os.environ.get('FIREBASE_DATABASE_URL')
