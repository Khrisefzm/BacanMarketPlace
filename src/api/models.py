from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_name = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    cellphone = db.Column(db.BigInteger, unique=True, nullable=False)
    country = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    password = db.Column(db.String(300), unique=False, nullable=False)
    product = db.relationship("Product", backref = "user", lazy = True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "user_name" : self.user_name,
            "name" : self.name,
            "last_name" : self.last_name,
            "cellphone" : self.cellphone,
            "country" : self.country,
            "city" : self.city,
            # do not serialize the password, its a security breach
        }
    
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    product_state = db.Column(db.String(120), unique=False, nullable=False)
    category = db.Column(db.String(50), unique=False, nullable=False)
    author = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(255), unique=False, nullable=False)
    image= db.Column(db.Text, unique=False, nullable=False)
    interested_product_one = db.Column(db.String(120), nullable=False)
    interested_product_two = db.Column(db.String(120), nullable=True)
    interested_product_three = db.Column(db.String(120), nullable=True)
    exchange_state = db.Column(db.String(120), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return f'<Product {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "product_state" : self.product_state,
            "category" : self.category,
            "author" : self.author,
            "description" : self.description,
            "image" : self.image,
            "interested_product_one" : self.interested_product_one,
            "interested_product_two" : self.interested_product_two,
            "interested_product_three" : self.interested_product_three,
            "exchange_state" : self.exchange_state,
            "user_id" : self.user_id,
        }
    
    
