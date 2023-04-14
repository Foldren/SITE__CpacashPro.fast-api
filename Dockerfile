FROM python:3.9-slim
WORKDIR /home
RUN apt update
COPY /source /source
WORKDIR /source
RUN pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r requirements.txt