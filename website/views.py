from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Note
from . import db
import json

views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    return render_template("home.html", user=current_user)


@views.route('/menu')
@login_required
def menu():
    return render_template("menu.html", user=current_user)


@views.route('/order')
@login_required
def order():
    return render_template("order.html", user=current_user)
