import os
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from api.user_api import user_api
from api.job_api import job_api
from api.booking_api import booking_api
from database.db import db
from config import DevelopmentConfig, ProductionConfig
from dotenv import load_dotenv
# Importar firedb desde firebase_config.py
from database.firebase_config import firedb

# Cargar variables de entorno desde el archivo .env
load_dotenv()

app = Flask(__name__)
CORS(app)

# Seleccionar la configuración según el entorno
environment_config = DevelopmentConfig if os.environ.get(
    'ENV') == 'development' else ProductionConfig
app.config.from_object(environment_config)

# Inicializar SQLAlchemy solo en desarrollo
if os.environ.get('ENV') == 'development':
    db.init_app(app)
    migrate = Migrate(app, db)

# Inicializar JWT
jwt = JWTManager(app)

# Registrar blueprints
app.register_blueprint(user_api)
app.register_blueprint(job_api)
app.register_blueprint(booking_api)

# Crear tablas en la base de datos en modo desarrollo
if os.environ.get('ENV') == 'development':
    with app.app_context():
        db.create_all()

if __name__ == "__main__":
    app.run()
