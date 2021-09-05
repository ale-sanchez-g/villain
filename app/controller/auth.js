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

const verify = (request, response) => {
    const token = request.headers.authorization;
    jwt.verify(token, tokenKey, (error, decoded) => {
        if (error) {
            response.status(403).json({error: 'Token Authentication failed ::: ' + error })
        } else {
            pool.query('SELECT * FROM appkey WHERE app = $1', [decoded.key], (error, results) => {
                if (error || results.rows.length === 0) {
                    console.log(error.stack)
                    response.status(400)
                    response.json({error: error.stack})
                    } else {
                    response.status(200).json(results.rows)
                    console.log('App validated successfully')
                  }
            })
      }
    })
}

function generateToken(appkey) {
    return {
            'token' : jwt.sign(appkey, tokenKey, {expiresIn: '100 years'}),
            'expiry': '100 years'
        };
    }

function verifyToken(token) {
    return jwt.verify(token, tokenKey);
}    

module.exports = { addApp, verify, generateToken, verifyToken };