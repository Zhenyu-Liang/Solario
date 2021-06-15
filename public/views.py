from flask import Blueprint, render_template, request, url_for, redirect
from .models import ContactInfo
from . import db

views = Blueprint("views", __name__)


@views.route("/", methods=['GET', 'POST'])
def home():
    if request.method == "POST":
        user_name = request.form.get("name")
        user_email = request.form.get("email")
        user_message = request.form.get("message")
        new_message = ContactInfo(
            name=user_name,
            email=user_email,
            message=user_message
        )

        db.session.add(new_message)
        db.session.commit()
        return redirect(url_for("views.home"))

    return render_template("index.html")
