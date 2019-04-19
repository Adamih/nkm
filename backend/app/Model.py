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
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(50), nullable=False)
    title = db.Column(db.String(20), nullable=False)

    def __init__(self, full_name, title):
        self.full_name = full_name
        self.title = title


class UserSchema(ma.Schema):
    id = fields.Integer()
    full_name = fields.String(required=True)
    title = fields.String(required=True)
