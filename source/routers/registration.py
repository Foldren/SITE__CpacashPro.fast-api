from typing import Annotated
from forms import RegistrationForm
from fastapi import APIRouter, Depends, Form
from httpx import AsyncClient
from fake_useragent import UserAgent

router = APIRouter()


@router.post("/api/registration/validate_email")
async def validate_email(login: Annotated[str, Form()]):
    async with AsyncClient(verify=False) as session:
        response = await session.post(
            url="https://my.cpacash.pro/signup",
            data={'email': login},
            headers={
                'User-Agent': UserAgent().chrome,
                'X-Requested-With': 'XMLHttpRequest',
            }
        )

    return "Указан невалидный email" not in response.json()['error']


@router.post("/api/registration/signup")
async def signup(form_data: RegistrationForm = Depends()):
    social_networks = ['WhatsApp', 'Telegram', 'Skype', 'Viber', 'VK', 'Другая соц.сеть']
    data_post = {
        'email': form_data.login,
        'password': form_data.password,
        'repeat_password': form_data.retype_pasw,
        'agree': 'true',
        'agree_use_info': 'true',
        'custom_fields[4][]': '1',
        'custom_fields[5]': form_data.about_me,
        # 'custom_fields[6]': промокод
        'custom_fields[15]': social_networks[form_data.social_network],
        'custom_fields[16]': form_data.social_nickname,
        'captcha': form_data.captcha if form_data.captcha != "" else "",
    }

    async with AsyncClient(verify=False) as session:
        response = await session.post(
            url="https://my.cpacash.pro/signup",
            data=data_post,
            headers={
                'User-Agent': UserAgent().chrome,
                'X-Requested-With': 'XMLHttpRequest',
            }
        )

        return response.json()
