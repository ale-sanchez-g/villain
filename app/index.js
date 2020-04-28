const express = require("express");
const bodyParser = require('body-parser')
const { pool } = require('./config')
const cors = require('cors')

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

// TODO: move the below into a separate V1 controller *********************************************
const getUser = (request, response) => {
    pool.query('SELECT * FROM leaderboard ORDER BY score DESC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      console.log('user list loaded successfully')
    })
  }
  
  const addUser = (request, response) => {
    const { username, score } = request.body
  
    pool.query('INSERT INTO leaderboard (username, score) VALUES ($1, $2)', [username, score], error => {
      if (error) {
        throw error
      }
      response.status(201).json({ status: 'success', message: 'User added.' })
      console.log('user added successfully')
    })
  }
// *********************************************

// Creates multiple methods for the same route
app
  .route('/v1/user')
  // GET endpoint
  .get(getUser)
  // POST endpoint
  .post(addUser)

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
   });