const express = require("express");
const connection = require("../database/Mysql");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const verifyToken = require("../auth/authMiddelware");
const router = express.Router();

dotenv.config();

router.post("/", verifyToken, (req, res) => {
  const { flightID } = req.body;
  const token = req.header("authorization");
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  connection.query(
    "SELECT * FROM cart WHERE flightID = ? AND userID = ?",
    [flightID, decoded.userID],
    (err, result) => {
      if (err) {
        return res.status(500).send("Error querying the database");
      }

      if (result.length > 0) {
        res.status(401).send("Already in cart");
      } else {
        connection.query(
          "INSERT INTO cart (flightID, userID) VALUES (?, ?)",
          [flightID, decoded.userID],
          (err, result) => {
            if (err) {
              res.status(500).send("Error inserting into the database");
            } else {
              res.send("Added to cart successfully");
            }
          }
        );
      }
    }
  );
});

router.get("/getall", (req, res) => {
  const token = req.header("authorization");
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  connection.query(
    "SELECT flights.FLightID,flights.From, flights.To, flights.Date, flights.Duration, flights.Price FROM flights INNER JOIN cart ON flights.FlightID = cart.FlightID WHERE cart.userID = ? ",
    decoded.userID,
    (err, result) => {
      if (err) {
        res.status(500).send("error inserting");
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
