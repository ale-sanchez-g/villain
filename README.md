# Villain

The purpose of the villain API is to provide users and score functionality. The API is run on nodejs express and connects to an ElephantSQL postgress DB.

## Requirements

- node 10x or above
- postgres
- ElephantSQL postgress account
- Heroku account
- Shippable account

## Get started

- clone repo `git clone https://github.com/ale-sanchez-g/villain`
- run `npm install`
- run `npm start` or `node app/index.js $PORT`

## Test

- must start the server with port 3000
- run `npm test`

## Swagger

After starting the service localy, refer to localhost:3000/api-docs endpoint

Please ensure you update the functinality as you fo using https://editor.swagger.io/, just updaload the openapi.json file from the swagger fordel into the editor ( you will be prompted to change to yaml). Then make the relevant changes and dowload the as JSON file.

The replace openapi.json and comimt the changes in a Pull request.
