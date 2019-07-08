from flask import Blueprint, request, make_response
from flask_restful import Api
from flask_cors import CORS

from .resources.User import UserResource

api_bp = Blueprint('models', __name__)

CORS(api_bp)

api = Api(api_bp)

# Route
# TODO: Implement login tokens.
@api.app.route('/login')
def login():
    auth = request.authorization

    if auth and auth.password == 'password':
        return 'Logged in'  # Here is where a token is supposed to be given.

    return make_response('Could not verify!', 401, {'WWW-authenticate': 'Basic realm="Login Required"'})


api.add_resource(UserResource, '/user')
