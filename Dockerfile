FROM python:3.9-slim
WORKDIR /home
RUN apt update
COPY /source /source
WORKDIR /source
RUN pip install --upgrade pip
RUN pip install -U --pre aiogram
RUN pip install fastapi uvicorn pydantic