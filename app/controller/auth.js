const { pool } = require("../config");
const sgMail = require("@sendgrid/mail");
const jwt = require("jsonwebtoken");

const tokenKey = "secret" || process.env.AUTH_KEY;
const emailKey = process.env.SENDGRID_API_KEY;

if (emailKey !== "off") {
  sgMail.setApiKey(emailKey);
}

const addApp = (request, response) => {
  const { key } = request.body;

  pool.query("INSERT INTO appkey (app) VALUES ($1)", [key], (error) => {
    if (error) {
      response.status(400);
      response.json({ error: error.stack });
      console.log(`addApp:ERR ${error.stack}`);
    } else {
      let payloadResponse = generateToken(request.body);

      sendMail(request.body.email, payloadResponse.token);
      let fullRes;

      if (request.body.returnKey === true) {
        fullRes = { ...payloadResponse, emailTo: request.body.email };
      } else {
        fullRes = { emailTo: request.body.email };
      }
      response.status(200).json(fullRes);
      console.log(`App ${key} added successfully`);
    }
  });
};

const verify = (request, response) => {
  const token = request.headers.authorization;
  jwt.verify(token, tokenKey, (error, decoded) => {
    if (error) {
      response
        .status(403)
        .json({ error: "Token Authentication failed ::: " + error });
    } else {
      pool.query(
        "SELECT * FROM appkey WHERE app = $1",
        [decoded.key],
        (error, results) => {
          if (error || results.rows.length === 0) {
            response.status(400);
            response.json({
              error: "Application in JWT is not register or has been deleted",
            });
          } else {
            response.status(200).json(results.rows);
            console.log("App validated successfully");
          }
        }
      );
    }
  });
};

const registerUser = (request, response) => {
  const { username, password } = request.body;
  const token = request.headers.authorization;
  jwt.verify(token, tokenKey, (error) => {
    if (error) {
      response
        .status(401)
        .json({ error: "Token Authentication failed ::: " + error });
    } else {
      if (username.length > 0 && password.length > 0) {
        console.log(`${username} is trying to register`);
        pool.query(
          "INSERT INTO usertable (username, pwd) VALUES ($1, $2)",
          [username, password],
          (error) => {
            if (error) {
              response.status(400);
              response.json({
                error: error,
              });
            } else {
              response.status(200).json();
            }
          }
        );
      } else {
        response.status(400).json({
          error: "Username and Password are required",
        });
      }
    }
  });
};

const logIn = (request, response) => {
  const { username, password } = request.body;
  const token = request.headers.authorization;
  jwt.verify(token, tokenKey, (error) => {
    if (error) {
      response
        .status(401)
        .json({ error: "Token Authentication failed ::: " + error });
    } else {
      switch (true) {
        case username.length === 0:
          response.status(400).json({
            error: "Username is required",
          });
          break;
        case password.length === 0:
          response.status(400).json({
            error: "Password is required",
          });
          break;
        default:
          pool.query(
            "SELECT * FROM usertable WHERE username = $1 AND pwd = $2",
            [username, password],
            (error, results) => {
              if (error) {
                response.status(400);
                response.json({
                  error: error,
                });
              } else {
                if (results.rows.length === 0) {
                  response.status(400).json({
                    error: "Username or Password is incorrect",
                  });
                } else {
                  let shortToken = {"username": username, expiresIn: "3 min"};
                  let userToken = generateToken(shortToken);

                  response.status(200).json(userToken);
                  console.log(`${username} logged in successfully`);
                }
              }
            }
          );
      }
    }
  });
};

function generateToken(payload) {
  const expiry = payload.expiresIn || "3 days";
  return {
    token: jwt.sign(payload, tokenKey, { expiresIn: expiry, algorithm: "HS512" }),
    expiresIn: expiry,
  };
}

function verifyToken(token) {
  return jwt.verify(token, tokenKey);
}

function sendMail(email, tokenKey) {
  if (emailKey === "off") {
    console.log("Email key is off");
  } else {
    const msg = {
      to: email,
      from: `morsisdivine@gmail.com`,
      subject: `Application registration and TokenKey`,
      text: `Congratulations your application is register and the tokeKey is ${tokenKey}`,
      html: `Congratulations your application is register and the tokeKey is <strong>${tokenKey}</strong>`,
    };
    sgMail.send(msg);
    console.log(`Email sent to ${email}`);
  }
}

module.exports = { addApp, verify, registerUser, logIn, generateToken, verifyToken };
