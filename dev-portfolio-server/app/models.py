#הגדרת הטבלאות של SQLite.
#כאן נגדיר מחלקות Python שמייצגות טבלאות (עם SQLAlchemy).
from app.database import db
from datetime import datetime

class ContactMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)  # שם השולח
    email = db.Column(db.String(100), nullable=False)  # אימייל השולח
    message = db.Column(db.Text, nullable=False)  # תוכן ההודעה
    sent_at = db.Column(db.DateTime, default=datetime.utcnow)  # תאריך שליחה
    def __repr__(self):
        return f"<User {self.name} {self.email} {self.message} {self.sent_at}>"

class Recommendation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)  # שם הממליץ
    email = db.Column(db.String(100), nullable=False)  # אימייל הממליץ
    recommendation = db.Column(db.Text, nullable=False)  # תוכן ההמלצה
    approved = db.Column(db.Boolean, default=False)  # האם ההמלצה אושרה להצגה
    created_at = db.Column(db.DateTime, default=datetime.utcnow)  # תאריך יצירה