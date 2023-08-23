"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt

app = Flask(__name__)
bcrypt = Bcrypt(app)

api = Blueprint('api', __name__)


@api.route('/singup', methods=['POST'])
def create_user():
    email = request.json.get("email", None)
    user_name = request.json.get("user_name", None)
    cellphone = request.json.get("cellphone", None)
    country = request.json.get("country", None)
    city = request.json.get("city", None)
    password = request.json.get("password", None)
    # encrypt password:
    pw_hash = bcrypt.generate_password_hash(password)
    # create a user in DB
    new_user = User (email = email, user_name = user_name, cellphone = cellphone, country = country, city = city, password = pw_hash)
    db.session.add(new_user)
    db.session.commit()
    jsonify(new_user.serialize())
    return "200"


