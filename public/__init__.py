from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

db = SQLAlchemy()
DB_NAME = "contact.db"


def create_db(app):
    if not os.path.exists("public/" + DB_NAME):
        db.create_all(app=app)


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "UYkoCQs_KpIo7gmUsgEKXsTTtmtAgAgA2awDB7OF"
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}"

    db.init_app(app)

    from .views import views

    app.register_blueprint(views, url_prefix='/')

    from .models import ContactInfo

    create_db(app)

    return app
