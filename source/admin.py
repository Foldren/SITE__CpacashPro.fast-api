from os import remove
from cryptography.fernet import Fernet
from sqladmin import ModelView
from sqlalchemy import select
from settings import IMAGES_ADMIN_PATH, SECRET_KEY
from database import async_session
from models import Product, User, Category, Tag
from typing import Optional
from sqladmin.authentication import AuthenticationBackend
from starlette.requests import Request
from starlette.responses import RedirectResponse
import uuid


class TagAdmin(ModelView, model=Tag):
    column_list = [Tag.id, Tag.name]
    form_columns = [Tag.name]
    name = "Тег"
    name_plural = "Теги"
    icon = "fa fa-at"


class CategoryAdmin(ModelView, model=Category):
    column_list = [Category.id, Category.name]
    form_columns = [Category.name, Category.image]
    name = "Категория"
    name_plural = "Категории"
    icon = "fa fa-th-list"

    async def on_model_delete(self, model):
        remove(IMAGES_ADMIN_PATH + "prizes/categories/" + model.image.name)

    async def on_model_change(self, data, model, is_created):
        if not is_created:
            remove(IMAGES_ADMIN_PATH + "prizes/categories/" + model.image.name)


class ProductAdmin(ModelView, model=Product):
    column_list = [Product.id, Product.name, Product.category, Product.tag, Product.scores]
    form_columns = [Product.name, Product.scores, Product.category, Product.image, Product.tag]
    column_sortable_list = [Product.id, Product.name, Product.category]
    column_searchable_list = [Product.name, Product.category, Product.tag]
    name = "Товар"
    name_plural = "Товары"
    icon = "fa fa-shopping-basket"

    async def on_model_delete(self, model):
        remove(IMAGES_ADMIN_PATH + "prizes/products/" + model.image.name)

    async def on_model_change(self, data, model, is_created):
        if not is_created:
            remove(IMAGES_ADMIN_PATH + "prizes/products/" + model.image.name)


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
