import click
from api.models import db, User, Product

def setup_commands(app):
    
    @app.cli.command("insert-test-users")
    @click.argument("count")
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")
        print("All test users created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        print("Inserting test data")

        # Crear usuarios
        user1 = User(email="user1@example.com", password="123456", is_active=True)
        user2 = User(email="user2@example.com", password="123456", is_active=True)
        db.session.add_all([user1, user2])
        db.session.commit()

        
        for i, book_details in enumerate(book_data, start=1):
            new_product = Product(
                product_type="book",
                category=book_details["category"],
                name=book_details["name"],
                author=book_details["author"],
                description=book_details["description"],
            )
            db.session.add(new_product)
            db.session.commit()

            # Asignar el product_id al libro
            book_details["product_id"] = new_product.id

        # Obtén los productos que son libros
        books = Product.query.filter_by(product_type="book").all()

        # Asignar 6 libros a cada usuario para intercambiar
        users = User.query.all()
        for i, user in enumerate(users):
            user_books = books[i * 6 : (i + 1) * 6]
            for book in user_books:
                interested_products = ",".join([f"Interested Product {i}" for i in range(1, 4)])
                exchange_product = ExchangeProduct(
                    interested_product_one=interested_products,
                    user=user,
                    product=book,
                )
                db.session.add(exchange_product)
            db.session.commit()
        
        print("Test users, products, and associations inserted successfully.")
