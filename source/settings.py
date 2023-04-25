from os import getcwd
from cryptography.fernet import Fernet

SECRET_KEY = b'58IIZMpD-3TZ8Ms8kHNVPVU7s8FErCd06Iw0DT9Cem8='
IMAGES_ADMIN_PATH = "./source/static/images/admin/"
ADMIN_IMAGE_LOGO = "/source/static/images/admin/logo.png"
IS_LOCAL = "Pycharm" in getcwd()
DATABASE_URl = "sqlite+aiosqlite:///source/cpacash-pro.db" if IS_LOCAL else "sqlite+aiosqlite:///cpacash-pro.db"

f = Fernet(SECRET_KEY)
# b'gAAAAABkQnwD3XcFISJAmZ9N41YYVjHqIV5p8XzLAZuVOoLoUklGoGpyowOuvIZfTmGSz3B9ICtYjqGbxyBmOWHXbJzCrgOJmhSR59wN4hsv82mfTj5d328='
