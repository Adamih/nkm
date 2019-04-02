from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from marshmallow import fields

ma = Marshmallow()
db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'

    # Totally required on registration
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(20), nullable=False, unique=True)
    full_name = db.Column(db.String(50), nullable=False)
    title = db.Column(db.String(20), nullable=False)

    def __init__(self, user_name, full_name, title):
        self.user_name = user_name
        self.full_name = full_name
        self.title = title


class UserSchema(ma.Schema):
    id = fields.Integer()
    user_name = fields.String(required=True)
    full_name = fields.String(required=True)
    title = fields.String(required=True)