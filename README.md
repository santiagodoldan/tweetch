# Tweetch
Twitter dashboard for "healthcare", "nasa" and "open source" topics.

## Dependencies

You will only need docker and docker-compose to run the application.

- docker (>= 17.12.0)
- docker-compose (>= 1.18.0)

## Installation

Clone repository:

```shell
git clone https://github.com/santiagodoldan/tweetch.git
```

### Environment Variables

You will need to add `.env.development`.

The example file should be enough for getting started. You can use it for dev: `cp .env.sample .env.development`

### Run ALL docker containers

```shell
docker-compose -f docker/docker-compose.yml up --remove-orphans
```

### Build docker container

```shell
docker-compose -f docker/docker-compose.yml build app
```

### Access docker container's bash

```shell
docker-compose -f docker/docker-compose.yml run app /bin/bash
```

### Start web app server

```shell
yarn run start-dev // development
yarn run start     // production
```

### Build web app assets

```shell
yarn run build
```

## Contact

- Santiago Doldán (santiagodoldan@icloud.com)
