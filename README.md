# Villain

The purpose of the villain API is to provide users and score functionality. The API is run on nodejs express hosted in Heroku and connects to an ElephantSQL postgress DB.

#### Badges
<img src="http://online.swagger.io/validator?url=https://raw.githubusercontent.com/ale-sanchez-g/villain/master/app/swagger/openapi.json"> [Swagger Docs](http://supervillain.herokuapp.com/api-docs/)

## Requirements

- node 10x or above
- postgres
- ElephantSQL postgress account
- Heroku account
- Shippable account

## Get started

### Postgres installation

In order to run your application localy and without affecting the production DB, you need to create a local DB to connect to. Folow the below steps.

#### On a Mac

- Navigate to <https://postgresapp.com/> and follow the instructions

### On Windows

- Navigate to <https://www.postgresql.org/download/windows/> and follow the instructions

## Villain API Application

open your terminal and follow the below steps

- clone repo `git clone https://github.com/ale-sanchez-g/villain`
- run the init script file to create your DB
  - mac/linux run `sh setup/init.sh`
  - windows run `bash ./setup/init.sh`
    - NOTE: Also make sure your shell script is formatted with Unix style, or there can be errors.
- run `npm install`
- set `ELEPHANT_URL` variable with the postgress URL of the instance that you what to use
- run `npm start` or `node app/index.js $PORT`
- Navigate to <http:localhoat:3000/api-docs> to view the swagger documentaiton of the API

## Test

- must start the server with port 3000
- run `npm test`

## Performance test

- Navigate to <https://k6.io/docs/getting-started/installation> and follow the instructions
- run `npm run perf:test`

## Swagger

After starting the service localy, refer to localhost:3000/api-docs endpoint

Please ensure you update the functinality as you fo using https://editor.swagger.io/, just updaload the openapi.json file from the swagger fordel into the editor ( you will be prompted to change to yaml). Then make the relevant changes and dowload the as JSON file.

The replace openapi.json and comimt the changes in a Pull request.
