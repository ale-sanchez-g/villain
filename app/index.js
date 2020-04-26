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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
    const { user, score } = request.body
  
    pool.query('INSERT INTO leaderboard (user, score) VALUES ($1, $2)', [user, score], error => {
      if (error) {
        throw error
      }
      response.status(201).json({ status: 'success', message: 'User added.' })
      console.log('user added successfully')
    })
  }

app
  .route('/v1/user')
  // GET endpoint
  .get(getUser)
  // POST endpoint
  .post(addUser)

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
   });