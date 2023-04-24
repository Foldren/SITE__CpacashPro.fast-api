import asyncio

from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from models import Base

# Подключаем бд (если нужно применяем доп. миграции)

engine = create_async_engine("sqlite+aiosqlite:///cpacash-pro.db", echo=False)
async_session = sessionmaker(bind=engine, expire_on_commit=False, class_=AsyncSession)
