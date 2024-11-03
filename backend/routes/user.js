const express = require("express");
const verifyToken = require("../auth/authMiddelware");
const bcrypt = require("bcrypt");
const connection = require("../database/Mysql");
const router = express.Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

router.post("/register", async (req, res) => {
  const { username, password,email } = req.body;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);


  try {
    connection.query(
      "Select username from user where username=?",
      [username],
      (error, result) => {
        if (result.length>0) {
          res.status(500).send("User already exists");
        } else {
          try {
            const sql =
              "INSERT INTO user (username, password, role,email) VALUES (?, ?, 'user',?)";
            connection.query(sql, [username, hashedPassword,email], (err, result) => {
              if (err) {
                console.error("Error registering user:", err);
                return res.status(500).send("Error registering user");
              }
              res.status(201).send("User registered successfully");
            });
          } catch (error) {
            console.error("Error during registration:", error);
            res.status(500).send("Internal server error");
          }
        }
      }
    );
  } catch (err) {
    console.error("Error: ", error);
  }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    try {
      connection.query(
        "SELECT username, password, role FROM user WHERE username = ?",
        [username],
        async (error, results) => {
          if (error) {
            console.error("Error fetching data:", error);
            return res.status(500).send("Error fetching data");
          }
  
          if (results.length === 0) {
            return res.status(401).send("Invalid credentials");
          }
  
          const user = results[0];
  
          const isPasswordMatch = await bcrypt.compare(password, user.password);
  
          if (!isPasswordMatch) {
            return res.status(401).send("Invalid credentials");
          }
  
          const token = jwt.sign(
            { username: user.username, role: user.role },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
          );
          return res.status(200).send({ token: token, role: user.role });
        }
      );
    } catch (err) {
      console.log("Unexpected error:", err);
      return res.status(500).send("Server error");
    }
  });
module.exports = router;
