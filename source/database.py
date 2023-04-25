from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from settings import DATABASE_URl

# Подключаем асинхронный движок бд
engine = create_async_engine(DATABASE_URl, echo=False, future=True)
async_session = sessionmaker(bind=engine, expire_on_commit=False, class_=AsyncSession)
