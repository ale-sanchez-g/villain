const { pool } = require('../config')

const jwt = require('jsonwebtoken');
const tokenKey = 'secret';


function generateToken(appkey) {
    pool.query('INSERT INTO appkey (app) VALUES ($1)', [appkey.key], error => {
        if (error) {
          console.log(error.stack)
          } else {
            return {
                'token' : jwt.sign(appkey, tokenKey, {expiresIn: '3600'}),
                'expiry': 3600
            };
        }
    })
}

module.exports = generateToken;