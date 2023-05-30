import traceback
from forms import ExchangePrizeForm
from fastapi import APIRouter, Depends
from httpx import AsyncClient
from settings import BOT_TOKEN, CHAT_ID_MANAGERS

router = APIRouter()


@router.post("/api/prizes/send_request")
async def send_request(form_data: ExchangePrizeForm = Depends()):
    async with AsyncClient(verify=False) as session:
        message = f"❗️❗️❗️ Пользователь ID: ({form_data.id_user}) Хочет обменять\nбаллы 💵на приз 🎁 \n\n\n" \
                  f"Данные пользователя 👨‍💻\n\n" \
                  f"Ник в телеграм: {form_data.telegram_nickname}\n"\
                  f"Email: {form_data.telegram_nickname}\n\n" \
                  f"Информация о товаре 📦\n\n" \
                  f"Наименование: {form_data.name_product}\n"\
                  f"Цена: {form_data.price_product}\n\n"\
                  f"📈 ❗️❗️❗️ 📈"

        for chat_id in CHAT_ID_MANAGERS:
            params_api_telegram = {
                'chat_id': chat_id,
                'text': message,
            }
            try:
                await session.get(
                    url=f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage',
                    params=params_api_telegram
                )
            except Exception:
                traceback.print_exc()
