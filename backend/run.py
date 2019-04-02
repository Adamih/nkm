from flask import Flask


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_ECHO"] = False
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
    app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:pass@localhost:5432/postgres"

    from app import api_bp
    app.register_blueprint(api_bp, url_prefix='/models')

    from models.User import db
    db.init_app(app)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
