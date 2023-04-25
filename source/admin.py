from os import remove
from cryptography.fernet import Fernet
from sqladmin import ModelView
from sqlalchemy import select
from settings import IMAGES_ADMIN_PATH, SECRET_KEY
from database import async_session
from models import Product, User, Category
from typing import Optional
from sqladmin.authentication import AuthenticationBackend
from starlette.requests import Request
from starlette.responses import RedirectResponse
import uuid


class CategoryAdmin(ModelView, model=Category):
    column_list = [Category.id, Category.name]
    form_columns = [Category.name, Category.image]
    name = "Категория"
    name_plural = "Категории"
    # icon = "fa-filter"


class ProductAdmin(ModelView, model=Product):
    column_list = [Product.id, Product.name, Product.scores, Product.category]
    form_columns = [Product.name, Product.scores, Product.category, Product.image]
    # form_include_pk = True
    name = "Товар"
    name_plural = "Товары"
    # icon = "fa-product-hunt"

    async def on_model_delete(self, model):
        remove(IMAGES_ADMIN_PATH + model.image.name)


class AdminAuth(AuthenticationBackend):
    async def login(self, request: Request) -> bool:
        form = await request.form()
        username, password = form["username"], form["password"]
        f = Fernet(SECRET_KEY)
        async with async_session() as session:
            user_obj = await session.execute(select(User).where(User.username == username))
            user_scalar = user_obj.scalars().first()

            if user_scalar is not None:
                decr_upsw = str(f.decrypt(user_scalar.password)).replace("b", "").replace("'", "")
                if decr_upsw == password:
                    # Validate username/password credentials
                    # And update session
                    request.session.update({"token": str(uuid.uuid4())})
                    return True
            return False

    async def logout(self, request: Request) -> bool:
        # Usually you'd want to just clear the session
        request.session.clear()
        return True

    async def authenticate(self, request: Request) -> Optional[RedirectResponse]:
        token = request.session.get("token")
        if not token:
            return RedirectResponse(request.url_for("admin:login"), status_code=302)

        # Check the token in depth


authentication_backend = AdminAuth(secret_key=SECRET_KEY)

