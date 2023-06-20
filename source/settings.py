from os import getcwd
from cryptography.fernet import Fernet

IMAGES_ADMIN_PATH = "./source/static/images/admin/"
ADMIN_IMAGE_LOGO = "/source/static/images/admin/logo.png"
IS_LOCAL = "Pycharm" in getcwd()
DATABASE_URl = "sqlite+aiosqlite:///source/cpacash-pro.db" if IS_LOCAL else "sqlite+aiosqlite:///cpacash-pro.db"
CHAT_ID_MANAGERS = [285158708, 234146531, 1008487307, 391178801, 379929992, 1404041078, 1399401297, 1383114808,
                    1325619459, 2041696776, 2022465368, 5059137178, 2008752678, 2115125056, 330061031, 2044691854]

f = Fernet(SECRET_KEY)
