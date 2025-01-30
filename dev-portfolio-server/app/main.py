#הקובץ הראשי שמפעיל את השרת.
#כאן תתחיל להפעיל את Flask ותייבא את שאר הקבצים (routes, models וכו').
from app import create_app

app = create_app()  # יצירת אפליקציה

if __name__ == '__main__':
    app.run(debug=True)  # הפעלת השרת עם מצב DEBUG
