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