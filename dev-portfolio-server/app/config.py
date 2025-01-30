#הגדרות כלליות (כגון מיקום קובץ מסד הנתונים, משתני DEBUG).
#DATABASE_URI = 'sqlite:///database.db'
#DEBUG = True
import os
from dotenv import load_dotenv

load_dotenv()  # טוען משתני סביבה מתוך קובץ .env

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "default-secret-key")  # מפתח סודי
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///database.db")  # כתובת מסד הנתונים
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # ביטול מעקב שינויים לשיפור ביצועים
