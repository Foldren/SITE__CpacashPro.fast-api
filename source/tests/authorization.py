from fastapi import APIRouter, Depends
from httpx import AsyncClient
from forms import AuthorizationForm

router = APIRouter()


@router.post("/api/registration/sign_in")
async def sign_in(form_data: AuthorizationForm = Depends()):
    print(form_data.captcha)
    data_post = {
        'email': form_data.email,
        'password': form_data.password,
        'remember': form_data.remember,
        'captcha': form_data.captcha if form_data.captcha != '' else '',
    }

    async with AsyncClient(verify=False) as session:
        response = await session.post(
            url="https://my.cpacash.pro/signin",
            data=data_post,
            headers={
                'User-Agent': form_data.user_agent,
                'X-Requested-With': 'XMLHttpRequest',
            }
        )

        response2 = await session.get(
            url="https://my.cpacash.pro/dashboard",
            headers={
                'User-Agent': form_data.user_agent,
                'X-Requested-With': 'XMLHttpRequest',
            },
        )

        print(response2.headers)
        print(response2.cookies)
        print(response2.json)
        print(response2.content)

        result = response.json()
        result['phpsessid'] = response.cookies['PHPSESSID']

        return result
