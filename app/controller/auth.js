const { pool } = require('../config')

const jwt = require('jsonwebtoken');
const tokenKey = 'secret';

const addApp = (request, response) => {
    const { key } = request.body

    pool.query('INSERT INTO appkey (app) VALUES ($1)', [key], error => {
        if (error) {
          console.log(error.stack)
          response.status(400)
          response.json({error: error.stack})
          } else {
          response.status(200).json(generateToken(request.body))
          console.log('App added successfully')
        }
    })
  }


function generateToken(appkey) {
    return {
            'token' : jwt.sign(appkey, tokenKey, {expiresIn: '3600'}),
            'expiry': 3600
        };
    }

module.exports = { addApp };