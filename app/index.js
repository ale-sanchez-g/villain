const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
let controllers = require('./controller/sql');

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

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
   });