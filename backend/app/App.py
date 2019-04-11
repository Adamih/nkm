from flask import Blueprint
from flask_restful import Api

from .resources.Test import Test
from .resources.User import UserResource

api_bp = Blueprint('models', __name__)
api = Api(api_bp)

# Route
api.add_resource(Test, '/')
api.add_resource(UserResource, '/user')
