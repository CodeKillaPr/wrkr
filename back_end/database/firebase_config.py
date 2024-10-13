import firebase_admin
from firebase_admin import credentials, firestore
import os


def initialize_firebase():
    if os.environ.get('ENV') == 'production':
        cred = credentials.Certificate(
            os.environ.get('FIREBASE_CREDENTIALS_PATH'))
        firebase_admin.initialize_app(cred, {
            'databaseURL': os.environ.get('FIREBASE_DATABASE_URL')
        })
        return firestore.client()
    return None


firedb = initialize_firebase()
