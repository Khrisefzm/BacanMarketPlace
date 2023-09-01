from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, Product
from flask_bcrypt import Bcrypt
from flask_cors import cross_origin
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app = Flask(__name__)
bcrypt = Bcrypt(app)

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
@cross_origin()
def create_user():
    data = request.json
    user = User(
        email=data.get("email"),
        user_name=data.get("user_name"),
        cellphone=data.get("cellphone"),
        country=data.get("country"),
        city=data.get("city"),
        password=bcrypt.generate_password_hash(data.get("password")).decode("utf-8"),
    )
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize()), 200

@api.route('/token', methods = ['POST'])
@cross_origin()
def token():
    user = request.json.get("user_name", None)
    password = request.json.get("password", None)

    user_from_db = User.query.filter_by(user_name=user).one_or_none()
    if not user_from_db :
        return jsonify("El usuario no existe"), 401
    else :  
        password_from_db = user_from_db.password
        print(password_from_db)
        if not bcrypt.check_password_hash(password_from_db, password):
            return jsonify("La contraseña no es correcta"), 401
    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token)

@api.route('/products', methods=['POST', 'GET'])
@cross_origin()
def post_get_product():
    if request.method == 'POST':
        data = request.json
        new_product = Product(
            category=data.get("category"),
            name=data.get("name"),
            author=data.get("author"),
            description=data.get("description"),
            image=data.get("image"),
            interested_product_one=data.get("interested_product_one"),
            interested_product_two=data.get("interested_product_two"),
            interested_product_three=data.get("interested_product_three"),
            user_id=data.get("user_id"),
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.serialize()), 200
    else:
        products = Product.query.all()
        return jsonify([product.serialize() for product in products]), 200

@api.route('/products/<int:id>', methods=['GET', 'PUT'])
@cross_origin()
def single_product(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({"message": "Product not found"}), 404

    if request.method == 'GET':
        return jsonify(product.serialize()), 200
    else:
        data = request.json
        product.name = data.get("name", product.name)
        product.category = data.get("category", product.category)
        product.author = data.get("author", product.author)
        product.description = data.get("description", product.description)
        product.image=data.get("image", product.image)
        product.interested_product_one=data.get("interested_product_one", product.interested_product_one)
        product.interested_product_two=data.get("interested_product_two", product.interested_product_two)
        product.interested_product_three=data.get("interested_product_three", product.interested_product_three)
        product.user_id=data.get("user_id", product.user_id)

        db.session.commit()
        return jsonify(product.serialize()), 200

# Incluir aquí el código para asignar libros a los usuarios

if __name__ == '__main__':
    app.register_blueprint(api, url_prefix='/api')
    app.run(debug=True)
