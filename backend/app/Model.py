from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from marshmallow import fields

ma = Marshmallow()
db = SQLAlchemy()


def initialize_db(app):
    app.app_context().push()
    db.init_app(app)
    db.drop_all()
    db.create_all()


class User(db.Model):
    __tablename__ = 'user'

    # Totally required on registration
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String, primary_key=True)
    password = db.Column(db.String, nullable=False)
    full_name = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)

    def __init__(self, username, password, full_name, title):
        self.username = username
        self.password = password
        self.full_name = full_name
        self.title = title


class UserSchema(ma.Schema):
    id = fields.Integer()
    username = fields.String(required=True)
    password = fields.String(required=True)
    full_name = fields.String(required=True)
    title = fields.String(required=True)
