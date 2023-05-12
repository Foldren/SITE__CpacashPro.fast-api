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
