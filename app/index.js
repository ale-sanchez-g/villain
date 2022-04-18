require ('newrelic');
const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
let controllers = require('./controller/sql');
let auth = require('./controller/auth');

let swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger/openapi.json');


const app = express();

// Default Port 3000 unless specified at start
const port = process.argv.slice(2)[0] || 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// The below routes are for swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Creates multiple methods for the same route
app
  .route('/v1/user')
  // GET endpoint
  .get(controllers.getUser)
  // POST endpoint
  .post(controllers.addUser)
  // PUT endpoint
  .put(controllers.updateUser)
  // DELETE endpoint
  .delete(controllers.cleanUsers)

app
  .route('/auth/gentoken')
  .post(auth.addApp)

app
  .route('/auth/verifytoken')
  .get(auth.verify)

app
  .route('/auth/user/register')
  .post(auth.registerUser)

app
  .route('/auth/user/login')
  .post(auth.logIn) 

app.get('/', function (req, res) {
  res.redirect('/api-docs')
})

  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
   });