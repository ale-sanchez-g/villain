const { pool } = require('../config')

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

const updateUser = (request, response) => {
    const { username, score } = request.body

    pool.query('UPDATE leaderboard SET score = $2 WHERE username = $1', [username, score], error => {
        if (error) {
        throw error
        }
        response.status(204).json({ status: 'success', message: 'User updates.' })
        console.log('user updated successfully')
    })
}

module.exports = { getUser, addUser, updateUser }