from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from config import db, bcrypt

class Project(db.Model, SerializerMixin):
    __tablename__="projects"

    id = db.Column(db.Integer, primary_key=True)


#Not sure If I'm going to do a backend honestly, may slow down the site with render