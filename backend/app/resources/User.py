from flask import request
from flask_restful import Resource
from .. import Model


user_schema = Model.UserSchema()
users_schema = Model.UserSchema(many=True)


class UserResource(Resource):
    def get(self):
        users = Model.User.query.all()
        users = users_schema.dump(users).data

        return {'status': 'success', 'data': users}, 200

    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input data provided'}, 400
        # Validate and deserialize input
        data, errors = user_schema.load(json_data)
        if errors:
            return errors, 422

        user = Model.User(
            username=json_data['username'],
            password=json_data['password'],
            full_name=json_data['full_name'],
            title=json_data['title']
        )

        Model.db.session.add(user)
        Model.db.session.commit()

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

        user = Model.User.query.filter_by(id=json_data['id']).first()

        if not user:
            return {'message': 'Person does not exist'}, 400

        # TODO: This needs to only edit info that is supplied. AKA: Check if it is set before
        user.username = data['username']
        user.password = data['password']
        user.full_name = data['full_name']
        user.title = data['title']

        Model.db.session.commit()

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

        category = Model.User.query.filter_by(id=data['id']).delete()

        Model.db.session.commit()

        result = user_schema.dump(category).data

        return {"status": 'success', 'data': result}, 204
