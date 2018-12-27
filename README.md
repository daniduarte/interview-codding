# Inteview codding

This projects is a interview codding test as proposed solution for ComparaOnline. It built on NodeJS. To run this project, you must to use the configures Docker environment stored :
> git@github.com:daniduarte/interview-codding-env.git

## Setup

To start the project, you must to install Docker and Docker Compose, then use the followin command to build with package.json:

```shell
docker-compose run code npm install
```

## Tasks

For testing:

```shell
docker-compose run code npm test
```

For show after-30-days demo on console

```shell
docker-compose run code npm after-30-days
```