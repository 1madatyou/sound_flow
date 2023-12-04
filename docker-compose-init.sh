#!bin/bash

docker compose run --rm django sh docker-start.sh
docker compose up --build

