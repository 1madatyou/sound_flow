from python:3.10.13-bookworm

ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt-get install -y wait-for-it

RUN chmod +x /usr/bin/wait-for-it

WORKDIR /usr/src/backend/sound_flow

COPY ./requirements.txt /usr/src/backend

RUN pip install -r /usr/src/backend/requirements.txt

COPY . /usr/src/backend/

