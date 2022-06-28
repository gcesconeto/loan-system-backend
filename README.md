# Loan System Backend

## Context

This is the backend part of a loan management system, it features a client database, loan and settlement controlling system as well as a general ledger for registering payments.

These are the main technologies used:
* Node.js + express for the API.
* Sequelize + Postgres for database.
* JWT for admin authorization.
* Joi for input validation.
* Heroku + Heroku Postgres for deploy.

## Installation

### Pre-requisites:

* NPM
* Postgres running locally

### Setup:
* Clone the repository https://github.com/gcesconeto/loan-system-backend.
* Open a terminal window inside the project folder and run `npm install`.
* Set up a .env file following .env.example pattern.
* Run `npm run db:reset` to set up the database.

## Using the API

To use the API locally run `npm start` in the root directory, these endpoints will be available at http://localhost:3001/ (default)
It is also hosted at https://voll-test-backend.herokuapp.com

### Endpoints

A list of endpoints and the basic request and response structure can be derived from the `Insomnia loan system.json` file.

## Contact

* Guilherme Cesconeto
* [`Github`](https://github.com/gcesconeto)
* [`LinkedIn`](https://www.linkedin.com/in/cesconeto/)
