import os

from flask import Flask


def create_app():
    app = Flask(__name__)

    db_pass = os.getenv("POSTGRES_PASSWORD")

    app.config["SQLALCHEMY_ECHO"] = False
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
    app.config["SQLALCHEMY_DATABASE_URI"] = f"postgresql+psycopg2://postgres:{db_pass}@172.17.0.1:5432/postgres"

    from app.App import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    from app.Model import db, initialize_db
    db.init_app(app)

    initialize_db(app)

    return app


if __name__ == "__main__":
    # Initializing flask app
    app = create_app()

    # --- This is just for initializing testing values ---
    from app.Model import User, db

    adam = User("adahen", "pass", "Adam Henriksson", "Pubmästare")
    solo = User("solo", "fernet123", "Alexander Westman", "General")
    db.session.add(adam)
    db.session.add(solo)
    db.session.commit()
    # ---

    # Start server
    app.run(host='0.0.0.0', debug=True)
