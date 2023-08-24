from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_name = db.Column(db.String(120), unique=True, nullable=False)
    cellphone = db.Column(db.Integer, unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    seller_product = db.relationship("SellerProduct", backref = "user", lazy = True)
    exchange_product = db.relationship("ExchangeProduct", backref = "user", lazy = True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "user_name" : self.user_name,
            "cellphone" : self.cellphone,
            # do not serialize the password, its a security breach
        }
    
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    type = db.Column(db.String(120), unique=False, nullable=False)
    category = db.Column(db.String(50), unique=False, nullable=False)
    author = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(255), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    seller_product = db.relationship("SellerProduct", backref = "product", lazy = True)
    exchange_product = db.relationship("ExchangeProduct", backref = "product", lazy = True)

    def __repr__(self):
        return f'<Product {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type" : self.type,
            "category" : self.category,
            "author" : self.author,
            "description" : self.description,
            # do not serialize the password, its a security breach
        }
    
class SellerProduct(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"), nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<SellerProduct {self.product_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id" : self.product_id,
            # do not serialize the password, its a security breach
        }
    
class ExchangeProduct(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("product.id"), nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<ExchangeProduct {self.product_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id" : self.product_id,
            # do not serialize the password, its a security breach
        }