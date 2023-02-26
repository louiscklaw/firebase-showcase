#!/usr/bin/env bash

set -ex

docker compose up -d --build
docker compose logs -f
