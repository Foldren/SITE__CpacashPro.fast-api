from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from os import path
from sqladmin import Admin
from admin import ProductAdmin, CategoryAdmin, authentication_backend
from database import engine
from models import Base
from settings import ADMIN_IMAGE_LOGO, IS_LOCAL

app = FastAPI()

# Подключаем статику
this_directory = path.dirname(__file__)
app.mount("/source/static", StaticFiles(directory=path.join(this_directory, "static")), name="static")
templates = Jinja2Templates(directory=path.join(this_directory, "templates"))

# Подключаем админку
admin = Admin(
    app=app,
    engine=engine,
    authentication_backend=authentication_backend,
    base_url="/admin-dy73HPyTU1UR_R5",
    logo_url=ADMIN_IMAGE_LOGO,
    title="CpacashAdmin",

)

admin.add_view(CategoryAdmin)
admin.add_view(ProductAdmin)


# @app.on_event("startup")
# async def create_db_engine():
#     async with engine.begin() as conn:
#         await conn.run_sync(Base.metadata.create_all)


@app.get("/", response_class=HTMLResponse)
async def main(request: Request):
    return templates.TemplateResponse("main.html", {"request": request})


@app.get("/prize-shop")
async def prize_shop(request: Request):
    return templates.TemplateResponse("prize_shop.html", {"request": request})


@app.get("/page-success")
async def page_success(request: Request):
    return templates.TemplateResponse("page_success.html", {"request": request})


@app.get("/contacts")
async def contacts(request: Request):
    return templates.TemplateResponse("contacts.html", {"request": request})


@app.get("/error-404")
async def error404(request: Request):
    return templates.TemplateResponse("error_404.html", {"request": request})


@app.get("/registration")
async def registration(request: Request):
    return templates.TemplateResponse("registration.html", {"request": request})


@app.get("/sign-in")
async def sign_in(request: Request):
    return templates.TemplateResponse("sign_in.html", {"request": request})


@app.get("/password-recovery")
async def sign_in(request: Request):
    return templates.TemplateResponse("password_recovery.html", {"request": request})
