# מכיל את כל ה-Routes של ה-API, מחולקים לפונקציות כמו:
# /submit-contact – לטופס צור קשר.
# /get-recommendations – לשליפת המלצות.
# תוכל לחלק לפי קבוצה של פונקציות אם תרצה (כגון Routes ללקוחות, Routes להמלצות וכו').
from flask import Blueprint, jsonify, request
from app.models import Recommendation, ContactMessage
from app.database import db

main = Blueprint('main', __name__)  # יצירת Blueprint לניהול מסלולים


def init_routes(app):
    app.register_blueprint(main)  # רישום כל המסלולים לאפליקציה


@main.route('/')
def home():
    return jsonify({"message": "This is the dev-portfolio-server!"})

#קבלת כל ההמלצות
@main.route('/recommendation', methods=['GET'])
def get_all_recommendation():
    recommendations = Recommendation.query.all()
    return jsonify(recommendations), 200

# הוספת המלצה
@main.route('/recommendation', methods=['POST'])
def add_recommendation():
    # מקבלים את הנתונים שנשלחים בבקשת JSON
    data = request.json
    # בודקים אם כל השדות החובה (name, email, recommendation) קיימים
    if not data.get('name') or not data.get('email') or not data.get('recommendation'):
        return jsonify({'error': 'All fields are required'}), 400  # מחזירים שגיאה אם שדה חובה חסר
    ##########אפשר להוסיף טריי וקאטש#######################
    # יוצרים אובייקט Recommendation חדש עם הנתונים שהתקבלו
    new_recommendation = Recommendation(name=data['name'], email=data['email'], recommendation=data['recommendation'])
    # מוסיפים את ההמלצה החדשה למסד הנתונים
    db.session.add(new_recommendation)
    # משדרים את השינויים למסד הנתונים
    db.session.commit()
    # מחזירים תשובה מוצלחת (קוד 201: נוצר בהצלחה)
    return jsonify({'message': 'Recommendation added successfully'}), 201

@main.route('/contact', methods=['POST'])
def add_contact_message():
    data = request.json  # קבלת נתוני JSON מבקשת ה-POST
    new_user = ContactMessage(name=data['name'], email=data['email'])  # יצירת משתמש חדש
    db.session.add(new_user)#שומר את האובייקט החדש ב-Session, אבל הוא עדיין לא נכתב למסד הנתונים.
    db.session.commit()#כותב את השינויים (כמו האובייקט החדש) למסד הנתונים בצורה קבועה.
    return jsonify({"message": "User added successfully!"})

@main.route('/recommendation/admin/<int:message_id>',method=['POST'])
def update_message_approved(message_id):
    update_message=
