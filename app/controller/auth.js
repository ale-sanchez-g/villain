const { pool } = require('../config')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const jwt = require('jsonwebtoken');
const tokenKey = 'secret' || process.env.AUTH_KEY;

const addApp = (request, response) => {
    const { key } = request.body

    pool.query('INSERT INTO appkey (app) VALUES ($1)', [key], error => {
        if (error) {
          response.status(400)
          response.json({error: error.stack})
          console.log(`addApp:ERR ${error.stack}`)
          } else {
            let payloadResponse = generateToken(request.body);
            sendMail(request.body.email, payloadResponse.token)
            response.status(200).json(payloadResponse)
            console.log(`App ${key} added successfully`)
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
                    response.status(400)
                    response.json({error: "Application in JWT is not register or has been deleted"})
                    } else {
                    response.status(200).json(results.rows)
                    console.log('App validated successfully')
                  }
            })
      }
    })
}

function generateToken(payload) {
    const expiry = payload.expiresIn || '3 days';
    return {
            'token' : jwt.sign(payload, tokenKey, {expiresIn: expiry}),
            'expiry': expiry
        };
    }

function verifyToken(token) {
    return jwt.verify(token, tokenKey);
}    

function sendMail(email, tokenKey) {
    const msg = {
      to: email,
        from: `morsisdivine@gmail.com`,
        subject: `Application registration and TokenKey`,
        text: `Congratulations your application is register and the tokeKey is ${tokenKey}`,
        html: `<strong>Congratulations your application is register and the tokeKey is ${tokenKey}</strong>`,
    };
    sgMail.send(msg);
}

module.exports = { addApp, verify, generateToken, verifyToken };