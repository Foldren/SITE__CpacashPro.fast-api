from typing import Annotated
from fastapi import APIRouter, Form
from httpx import AsyncClient
from fake_useragent import UserAgent

router = APIRouter()


@router.post("/api/registration/sign_in")
async def sign_in(password: Annotated[str, Form()], email: Annotated[str, Form()], remember: Annotated[str, Form()] = 0, captcha: Annotated[str, Form()] = ''):
    data_post = {
        'email': email,
        'password': password,
        'remember': remember,
        'captcha': captcha if captcha != '' else '',
    }

    async with AsyncClient(verify=False) as session:
        response = await session.post(
            url="https://my.cpacash.pro/signin",
            data=data_post,
            headers={
                'User-Agent': UserAgent().chrome,
                'X-Requested-With': 'XMLHttpRequest',
            }
        )
        print(response.json())

        return response.json()
