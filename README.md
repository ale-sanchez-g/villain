# Villain

The purpose of the villain API is to provide users and score functionality. The API is run on nodejs express hosted in Heroku and connects to an ElephantSQL postgress DB.

#### Badges

<img src="http://online.swagger.io/validator?url=https://raw.githubusercontent.com/ale-sanchez-g/villain/master/app/swagger/openapi.json"> [Swagger Docs](http://supervillain.herokuapp.com/api-docs/)

## Requirements

- node 19x due to Dyna support
- postgres
- ElephantSQL postgress account
- Sendgrid account

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
- run `npm start` or `node app/index.js $PORT`
- example:

```
SENDGRID_API_KEY=off ELEPHANT_URL=postgresql://postgres@localhost:5432/postgres  npm start
```

- Navigate to <http:localhoat:3000/api-docs> to view the swagger documentaiton of the API

to run in production

```
NODE_ENV=productino SENDGRID_API_KEY=<enterKEY> ELEPHANT_URL=<enterPostgressUrl> npm start
```

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

## Sendgrid

We use sendgrid for sending authentication keys over email, as part of our 2FA system. To get the sendgrid API key you need to register.

Current account for this project is under creation.

## Elephant SQL

We use the free tier of ElephantSQL to host our database. To get access to the database you need to register.

Log into your account and get the URL from the instance

## Docker

Ensure you have requested the `.env` file with the relevant keys and run the below commands

```bash
source .env
```

Build application base on the architecture

```bash
docker build --build-arg DT_PAAS_TOKEN=${DT_PAAS_TOKEN} -t villan-api:latest .
```
or
```bash
docker build --build-arg DT_PAAS_TOKEN=${DT_PAAS_TOKEN} -t villan-api:arm . -f Dockerfile.m2
```

Run Image with the below command
```bash
docker run -p 3000:3000 -e SENDGRID_API_KEY=${SENDGRID_API_KEY} -e NODE_ENV=production -e ELEPHANT_URL=${ELEPHANT_URL} villan-api:arm
```
or
```bash
docker run -p 3000:3000 -e SENDGRID_API_KEY=${SENDGRID_API_KEY} -e NODE_ENV=production -e ELEPHANT_URL=${ELEPHANT_URL} villan-api:latest
```

## Heroku

We use Heroku to host our application.

To deploy to Heroku you need to have an account and be added to the project.

To deploy to Heroku you need to have the Heroku CLI installed. Refer to https://devcenter.heroku.com/articles/heroku-cli

```bash
heroku login
heroku container:login
heroku container:push web -a supervillan
heroku container:release web -a supervillan
```
