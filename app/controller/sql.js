const { pool } = require('../config')

const getUser = (request, response) => {
    pool.query('SELECT * FROM leaderboard ORDER BY score DESC', (error, results) => {
      if (error) {
        console.log(error.stack)
        response.status(400)
        response.json({error: error.stack})
        } else {
        response.status(200).json(results.rows)
        console.log('user list loaded successfully')
      }
    })
  }
  
const addUser = (request, response) => {
    const { username, score } = request.body

    pool.query('INSERT INTO leaderboard (username, score) VALUES ($1, $2)', [username, score], error => {
        if (error) {
          console.log(error.stack)
          response.status(400)
          response.json({error: error.stack})
          } else {
          response.status(201).json({ status: 'success', message: 'User added.' })
          console.log('user added successfully')
        }
    })
  }

const updateUser = (request, response) => {
    const { username, score } = request.body

    pool.query('UPDATE leaderboard SET score = $2 WHERE username = $1', [username, score], (error, result) => {
        if (result.rowCount == 0) {
            pool.query('INSERT INTO leaderboard (username, score) VALUES ($1, $2)', [username, score], error => {
            response.status(201).json({ status: 'success', message: 'User added with updated score' })
          })
        } else {
          response.status(204)
          response.json()
          console.log('user updated successfully')
        }
    })
  }

const cleanUsers = (request, response) => {
  if (request.header("delete-key") == process.env.DEL_KEY) {
    pool.query('DELETE FROM leaderboard WHERE Score IS NOT NULL', (error, results) => {
      if (error) {
          console.log(error.stack)
          response.status(400)
          response.json({error: error.stack})
        } else {
          response.status(204).json(results.rows)
          console.log('user list cleaned successfullsy')
      }
    });
  } else {
    console.log("ERR401-unable-to-authenticate-delete-key")
    response.status(401)
    response.json({error: "unable to authenticate key"})
  }
  }
  
module.exports = { getUser, addUser, updateUser, cleanUsers }