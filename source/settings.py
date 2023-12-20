from os import getcwd
from cryptography.fernet import Fernet

IMAGES_ADMIN_PATH = "./source/static/images/admin/"
ADMIN_IMAGE_LOGO = "/source/static/images/admin/logo.png"
IS_LOCAL = "Pycharm" in getcwd()
CHAT_ID_MANAGERS = 

f = Fernet(SECRET_KEY)
