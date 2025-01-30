# קובץ ראשוני ליצירת היישום Flask
from flask import Flask
from app.config import Config
from app.database import init_db
from app.routes import init_routes

def create_app():
    app = Flask(__name__)  # יצירת אפליקציית Flask
    app.config.from_object(Config)  # טעינת ההגדרות מתוך קובץ config.py

    # Initialize database
    init_db(app)  # חיבור מסד הנתונים לאפליקציה

    # Initialize routes
    init_routes(app)  # חיבור כל המסלולים (routes) לאפליקציה

    return app
