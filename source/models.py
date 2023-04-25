from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy_fields.storages import FileSystemStorage
from sqlalchemy_fields.types import FileType
from source.settings import IMAGES_ADMIN_PATH

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String(150))
    password = Column(String(50))


class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True)
    name = Column(String(90))
    image = Column(FileType(storage=FileSystemStorage(path=IMAGES_ADMIN_PATH+"/categories")))

    def __str__(self):
        return self.name


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    category_id = Column(Integer, ForeignKey('categories.id'))
    category = relationship("Category")
    name = Column(String(170))
    scores = Column(Integer)
    image = Column(FileType(storage=FileSystemStorage(path=IMAGES_ADMIN_PATH+"/products")))

