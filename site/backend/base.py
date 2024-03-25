#C:\flask_dev\flaskreact\app.py
from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt #pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
import firebase_admin
from firebase_admin import db
from password_generator import PasswordGenerator
from models import db, User
from redmail import gmail

app = Flask(__name__)
 
app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
 
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
  
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)
db.init_app(app)
pwo = PasswordGenerator()

gmail.username = "personalitygpt@asdrp.org"
gmail.password = "cscbhjopnfxbjyrb"

@app.route("/")
def hello_world():
    return "Hello, World!"
 
@app.route("/signup", methods=["POST"])
def signup():

    email = request.json["email"]
    username = request.json["username"]
    password = request.json["password"]
 
    user_exists = User.query.filter_by(email=email).first() is not None
 
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409
     
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
 
    session["user_id"] = new_user.id
 
    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })
 
@app.route("/login", methods=["POST"])
def login_user():
    username = request.json["username"]
    password = request.json["password"]
  
    user = User.query.filter_by(username=username).first()
  
    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401
  
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
      
    session["user_id"] = user.id
  
    return jsonify({
        "id": user.id,
        "email": user.email
    })

@app.route("/resetpwd", methods=["POST"])
def resetpwd():
    email = request.json["email"]
    username = request.json["username"]

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401

    password = pwo.non_duplicate_password(10)
    user.password = bcrypt.generate_password_hash(password)
    gmail.send(
        subject="Password reset",
        receivers=[email],
        text=f"This is your new password: {password}"
    )

    db.session.commit()

    session['user_id'] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })
 
if __name__ == "__main__":
    app.run(debug=True)