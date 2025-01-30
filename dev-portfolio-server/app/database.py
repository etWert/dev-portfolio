#מכיל פונקציות לחיבור למסד הנתונים.
#לדוגמה: יצירת מסד נתונים, חיבור לטבלאות וכו'.
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()  # יצירת אובייקט מסד נתונים

def init_db(app):
    db.init_app(app)  # חיבור מסד הנתונים לאפליקציית Flask
    with app.app_context():
        db.create_all()  # יצירת טבלאות אם הן לא קיימות
