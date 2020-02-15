# Note, not finished! Master should build just alright though

## Init

### Database & SQLAlchemy
1. Build and start the docker images `backend` and `postgres`. Make sure flask is running. 
2. See "Initial migration"
3. SSH into container `docker-compose exec backend /bin/bash`:
```
python
> from yourapplication import db
> db.create_all()
```

## Migration

### Initial migration
```
python Migrate.py db init
python Migrate.py db migrate
python Migrate.py db upgrade
```

### Migrating changes
```
python Migrate.py db migrate
python Migrate.py db upgrade
```
If this fails, then something bad went down or the db is bad at migrating.

# Backend

### Creating new route
This opens a new flask_restful route with an optional value `todo_id`.
Example: A Todo-list resource
```
# This is defined in App.py
api.add_resource(UserResource, '/user')
api.add_resource(UserResource, '/user/<user_id>')
```
This requires a Resource class, extended from flask_restful. Here you can define 
the functions for GET, PUT, POST, DELETE etc.

Here, the `user_id` parameter is defined, and takes in the value defined in the
route. 
```
class UserResource(flask_restful.Resource):
    def get(self, user_id=None):
        ...
        if user_id:
            # Logic for user_id case
            ...
        else:
            # Logic for default case
            ...
        ...
        
        if some_error_state:  # If db fails to query data. Or anything really.
                              # There can be multiple of these.
            return {'message': 'Reason for failure'}, 400  # Status code
            
        
        return {'status': 'success', 'data': data}, 200
``` 
The default case `user_id=None` is for the `'/user'` route and
the case with a value set is for the `'/user/<user_id>'` route. 

Error code should reflect the issue, see [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes "https://wikipedia.org/wiki/List_of_HTTP_status_codes")

This is an example of a GET request properly implemented. Although very trivial, it
illustrates how you should be working with models: 
```
user_schema = UserSchema()
users_schema = UserSchema(many=True)

class UserResource(flask_restful.Resource):
    def get(self, user_id=None):
        if user_id:
            users = User.query.filter_by(id=user_id).first()
        else:
            users = User.query.all()
        users = users_schema.dump(users).data

        return {'status': 'success', 'data': users}, 200
``` 
Schemas are part of the [Marshmallow Library](https://marshmallow.readthedocs.io/en/3.0/ "https://www.marshmallow/readthedocs.io").
They are responsible for serialization, whatever that is. 

The User class is derived from `Model` which is part of the [SQLAlchemy Library](https://www.sqlalchemy.org/ "https://www.sqlalchemy.org").
This class is the main interface between the you and the database. You send queries to the server using the `User.query` property
which is a feature of the parent class `Model`

This is an example of a SQLAlchemy class derived from `Model`:

```
db = SQLAlchemy()

class User(db.Model)
    __tablename__ = "user"  # This is for naming tables inside the database. This does not add functionality.
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    
    def __init__(self, username, password):
        self.username = username
        self.password = password
```
Notice that the `id` value does not need to be set. This is because of it being a `primary_key` and an `db.Integer`. 
This means that if `id` is not explicitly set, the value will be incrementally auto-generated. 

To understand things like `nullable`, `primary_key`, `autoincrement` (and more) i would recommend a basic intro
to relational database design. Those are called constraints, if you want to know which more constraints are available, check out
the source code for `db.Column`. 
* [Wiki on Relational Databases](https://en.wikipedia.org/wiki/Relational_database)

Godspeed. 

Anyway, here is an example of how the marshmallow serialization class is 
defined. I usually define the `UserSchema(ma.Schema)` and the `User(db.Model)` in the same file, but you do you.
```
ma = Marshmallow()

class UserSchema(ma.Schema):
    id = fields.Integer()
    username = fields.String(required=True)
    password = fields.String(required=True)
```

