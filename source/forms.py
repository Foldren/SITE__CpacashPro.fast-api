from dataclasses import dataclass
from fastapi import Form


@dataclass
class RegistrationForm:
    about_me: str = Form()
    accept_data: str = Form()
    accept_scam: str = Form()
    login: str = Form()
    password: str = Form()
    retype_pasw: str = Form()
    social_network: int = Form()
    turnover: str = Form()
    verticals: list[int] = Form()
    yes_no_exp: str = Form()
    social_nickname: str = Form()
    captcha: str = Form(default="")


@dataclass
class ExchangePrizeForm:
    id_user: int = Form()
    email_user: str = Form()
    telegram_nickname: str = Form()
    name_product: str = Form()
    price_product: int = Form()


# @dataclass
# class AuthorizationForm:
#     password: str = Form()
#     email: str = Form()
#     remember: str = Form(default=0)
#     captcha: str = Form(default="")
#     user_agent: str = Form()
