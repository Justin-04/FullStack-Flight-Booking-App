const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../database/Mysql");
const dotenv = require("dotenv");

dotenv.config();

const register = async (req, res) => {
  const { username, password, email, phoneNumber } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    connection.query(
      "SELECT username FROM user WHERE username = ?",
      [username],
      (error, result) => {
        if (result.length > 0) {
          return res.status(409).send("User already exists");
        } else {
          const sql =
            "INSERT INTO user (username, password, role, email, phoneNumber) VALUES (?, ?, 'user', ?, ?)";
          connection.query(
            sql,
            [username, hashedPassword, email, phoneNumber],
            (err) => {
              if (err) {
                console.error("Error registering user:", err);
                return res.status(500).send("Error registering user");
              }
              res.status(201).send("User registered successfully");
            }
          );
        }
      }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    connection.query(
      "SELECT userID, username, password, role, email FROM user WHERE username = ?",
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
          {
            userID: user.userID,
            username: user.username,
            role: user.role,
            email: user.email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );

        return res.status(200).send({ token: token, role: user.role });
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).send("Server error");
  }
};

const getProfile = (req, res) => {
  const token = req.header("authorization");
  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  const sql = "Select * from user where userID=?";
  connection.query(sql, [decoded.userID], (err, result) => {
    if (err) {
      res.status(404).send("User not found");
    }
    res.send(result);
  });
};

const updateProfile = (req, res) => {
  const token = req.header("authorization");
  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  const { email, phoneNumber, username } = req.body;
  if (email && phoneNumber && username) {
    connection.query(
      "Select  * from user where username=?",
      [username],
      (err, result) => {
        if (err) {
          res.status(500).send("Internal error");
        }
        if (result.length > 0) {
          res.status(403).send("Username already exists");
        }
        if (result.length === 0) {
          connection.query(
            "UPDATE user SET username=?, phoneNumber=?, email=? WHERE userId=?",
            [username, phoneNumber, email, decoded.userID],
            (err) => {
              if (err) {
                return res.status(500).send("Internal error");
              }
              res.status(200).send("Profile updated successfully");
            }
          );
        }
      }
    );
  } else {
    res.status(500).send("All values should be valid");
  }
};

module.exports = { register, login, getProfile, updateProfile };
