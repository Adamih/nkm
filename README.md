To initialize the database using SQLAlchemy:
1. Build and start the docker image backend
2. SSH into container and run:
    ```
    from yourapplication import db
    db.create_all()
    ```
