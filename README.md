# Apartments search

## Stack

1. **Frontend**: ReactJS
2. **Backend**: Express on NodeJS + Mongoose on MongoDB
3. **Environment**: Docker Compose. Images based on alpine-node and mongodb

## Setup

You need Docker and Docker Compose installed to run the development environment.

To get the app running on _Development Mode_<sup>\*</sup>, open your Bash Terminal and run:

> `$ docker-compose build`

> `$ docker-compose up`

This will create and run two containers:

1. **Frontend:** You can visit the web client at _http://localhost:3000_

2. **Backend:** The backend API will be available at _http://localhost:9000_

<sup>\*</sup> This app example is only meant to run in Development Mode.

## Automated Testing

To run the unit test on the frontend you must first build the client image (see Setup instructions). Then run:

> `$ docker run -it [FOLDERNAME]_client sh`

> `$ npm test`

This will run the Jest+Enzyme unit tests

**Important**: The backend (api) does not include unit testing
