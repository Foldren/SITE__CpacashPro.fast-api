from os import getcwd
from cryptography.fernet import Fernet

SECRET_KEY = b'58IIZMpD-3TZ8Ms8kHNVPVU7s8FErCd06Iw0DT9Cem8='
IMAGES_ADMIN_PATH = "./source/static/images/admin/"
ADMIN_IMAGE_LOGO = "/source/static/images/admin/logo.png"
IS_LOCAL = "Pycharm" in getcwd()
DATABASE_URl = "sqlite+aiosqlite:///source/cpacash-pro.db" if IS_LOCAL else "sqlite+aiosqlite:///cpacash-pro.db"
BOT_TOKEN = "1462548526:AAHrmYHbrAGzwYgcvDofcejf-7C6-BsJrAk"
CHAT_ID_MANAGERS = [285158708, 234146531, 1008487307, 391178801, 379929992, 1404041078, 1399401297, 1383114808,
                    1325619459, 2041696776, 2022465368, 5059137178, 2008752678, 2115125056, 330061031, 2044691854]

f = Fernet(SECRET_KEY)
# b'gAAAAABkQnwD3XcFISJAmZ9N41YYVjHqIV5p8XzLAZuVOoLoUklGoGpyowOuvIZfTmGSz3B9ICtYjqGbxyBmOWHXbJzCrgOJmhSR59wN4hsv82mfTj5d328='
