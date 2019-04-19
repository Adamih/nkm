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

    from app.Model import db
    db.init_app(app)

    return app


if __name__ == "__main__":
    app = create_app()

    app.run(host='0.0.0.0', debug=True)
