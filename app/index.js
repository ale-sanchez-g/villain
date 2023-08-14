const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
let controllers = require("./controller/sql");
let auth = require("./controller/auth");

let swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger/openapi.json");

const app = express();

// Default Port 3000 unless specified at start
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// The below routes are for swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Creates multiple methods for the same route
app
  .route("/v1/user")
  // GET endpoint
  .get(controllers.getUser)
  // POST endpoint
  .post(controllers.addUser)
  // PUT endpoint
  .put(controllers.updateUser)
  // DELETE endpoint
  .delete(controllers.cleanUsers);
app
  .route("/v1/user/:name")
  // User Authenticated GET endpoint
  .get(controllers.getUserByName);

app.route("/auth/gentoken").post(auth.addApp);

app.route("/auth/verifytoken").get(auth.verify);

app.route("/auth/user/register").post(auth.registerUser);

app.route("/auth/user/login").post(auth.logIn);

app.get("/", function (req, res) {
  res.redirect("/api-docs");
});

app.get("/health", function (req, res) {
  // Health check
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date(),
  };

  res.status(200).send(data);
});

// Endpoint to simulate a CPU intensive task
app.get("/fibonacci/:number", function (req, res) {
  const number = req.params.number;

  const fibonacci = (num) => {
    console.log(`Calculating fibonacci for ${num}`);
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  if (number < 0) {
    res.status(400).send("Number must be positive");
  } else {
    res.status(200).send(fibonacci(number).toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
