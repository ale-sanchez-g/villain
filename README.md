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
- set `SENDGRID_API_KEY` with your SENDGRID API KEY, or you can set it to `off` so the function to send emails is not called
- set `NEW_RELIC_APP_NAME` variable with the name of your app
- set `NEW_RELIC_LICENSE_KEY` variable with your NEW_RELIC_LICENSE_KEY
- run `npm start` or `node app/index.js $PORT`
- example:
```
NEW_RELIC_APP_NAME=villan SENDGRID_API_KEY=off ELEPHANT_URL=postgresql://postgres@localhost:5432/postgres  npm start
```
- Navigate to <http:localhoat:3000/api-docs> to view the swagger documentaiton of the API

## Test

- must start the server with port 3000
- run `npm test`

## Performance test

Navigate to <https://k6.io/docs/getting-started/installation> and follow the instructions

We have set up 4 test to validate the performance of the API.

- e2e // seems to break the app DO NOT RUN
- smoke (k6.spec.js)
- Load (userJourneyLoad.spec.js)
- Spike (userJourneySpike.spec.js)

You can run the above by running `k6 run userJourneyLoad.spec.js` or by updating the ci.load_test.yml file with the name of the branch you can test run the load test.

If you are making major changes to the DB queries or changes to the DB, we recommend you run the load test to validate the performance of the API.

## Swagger

After starting the service localy, refer to localhost:3000/api-docs endpoint

Please ensure you update the functinality as you fo using https://editor.swagger.io/, just updaload the openapi.json file from the swagger fordel into the editor ( you will be prompted to change to yaml). Then make the relevant changes and dowload the as JSON file.

The replace openapi.json and comimt the changes in a Pull request.
