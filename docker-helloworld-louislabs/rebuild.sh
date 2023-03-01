#!/usr/bin/env bash

set -ex

git pull

docker compose pull
docker compose build
docker compose kill
docker compose down
docker compose up -d 

docker compose logs -f
