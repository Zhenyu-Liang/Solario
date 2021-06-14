from flask import Flask


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "UYkoCQs_KpIo7gmUsgEKXsTTtmtAgAgA2awDB7OF"

    from .views import views

    app.register_blueprint(views, url_prefix='/')

    return app
