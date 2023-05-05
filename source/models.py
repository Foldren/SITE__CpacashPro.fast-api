from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy_fields.storages import FileSystemStorage
from sqlalchemy_fields.types import FileType
from .settings import IMAGES_ADMIN_PATH

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
    image = Column(FileType(storage=FileSystemStorage(path=IMAGES_ADMIN_PATH + "/prizes/categories/")))

    def __str__(self):
        return self.name


product_tag = Table('product_tag', Base.metadata,
                    Column('author_id', Integer(), ForeignKey("products.id")),
                    Column('book_id', Integer(), ForeignKey("tags.id"))
                    )


class Tag(Base):
    __tablename__ = "tags"
    id = Column(Integer, primary_key=True)
    name = Column(String(170))

    def __str__(self):
        return self.name


class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True)
    category_id = Column(Integer, ForeignKey('categories.id'))
    category = relationship("Category", lazy='subquery')
    name = Column(String(170))
    scores = Column(Integer)
    image = Column(FileType(storage=FileSystemStorage(path=IMAGES_ADMIN_PATH + "/prizes/products/")))
    tag = relationship("Tag", secondary=product_tag, backref="tags", lazy='subquery')

    def __str__(self):
        return self.name
