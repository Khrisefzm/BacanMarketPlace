"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product, SellerProduct, ExchangeProduct
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from flask_cors import cross_origin
import json

app = Flask(__name__)
bcrypt = Bcrypt(app)

api = Blueprint('api', __name__)


@api.route('/singup', methods=['POST'])
@cross_origin()
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

@api.route('/products', methods=['POST', 'GET'])
@cross_origin()
def post_get_product():
    if request.method == 'POST':
        name = request.json.get("name", None)
        product_type = request.json.get("product_type", None)
        category = request.json.get("category", None)
        author = request.json.get("author", None)
        description = request.json.get("description", None)
        # create a product in DB
        new_product = Product(name = name, product_type = product_type, category = category, author = author, description = description)
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.serialize()), 200
    else:
        products = Product.query.all()
        print(products)
        return list(map(lambda element : element.serialize(), products)), 200
    
@api.route('/products/<int:id>', methods=['GET','PUT'])
@cross_origin()
def single_product(id):
    if request.method == 'GET':
        product = Product.query.get(id)
        return jsonify(product.serialize()), 200
    else :
        product = Product.query.get(id)
        product.name = request.json.get("name", product.name)
        product.product_type = request.json.get("product_type", product.product_type)
        product.category = request.json.get("category", product.category)
        product.author = request.json.get("author", product.author)
        product.description = request.json.get("description", product.description)
        db.session.add(product)
        db.session.commit()
        return jsonify(product.serialize()), 200

        