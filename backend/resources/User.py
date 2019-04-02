from flask import jsonify, request
from flask_restful import Resource
from models.User import db, User, UserSchema

user_schema = UserSchema()
users_schema = UserSchema(many=True)


class UserResource(Resource):
    def get(self):
        people = User.query.all()
        people = users_schema.dump(people).data
        return {'status': 'success', 'data': people}, 200

    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        data, errors = user_schema.load(json_data)
        if errors:
            return errors, 422

        user = User(
            user_name=json_data['user_name'],
            full_name=json_data['full_name'],
            title=json_data['title']
        )

        db.session.add(user)
        db.session.commit()

        result = user_schema.dump(user).data
        return {"status": 'success', 'data': result}, 201

    def put(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        data, errors = user_schema.load(json_data)
        if errors:
            return errors, 422

        if 'id' not in json_data:
            user = User.query.filter_by(user_name=json_data['user_name']).first()
        else:
            user = User.query.filter_by(id=json_data['id']).first()

        if not user:
            return {'message': 'Person does not exist'}, 400

        if 'full_name' in data:
            user.full_name = data['full_name']
        if 'email' in data:
            user.email = data['email']
        if 'title' in data:
            user.title = data['title']

        db.session.commit()

        result = user_schema.dump(user).data

        return {"status": 'success', 'data': result}, 204

    def delete(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        data, errors = user_schema.load(json_data)
        if errors:
            return errors, 422

        if 'id' not in data:
            category = User.query.filter_by(user_name=data['user_name']).delete()
        else:
            category = User.query.filter_by(id=data['id']).delete()

        db.session.commit()

        result = user_schema.dump(category).data

        return {"status": 'success', 'data': result}, 204
