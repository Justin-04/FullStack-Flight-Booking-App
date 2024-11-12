const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../database/Mysql");
const dotenv = require("dotenv");

dotenv.config();

const register = async (req, res) => {
  const { username, password, email } = req.body;

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
          const sql = "INSERT INTO user (username, password, role, email) VALUES (?, ?, 'user', ?)";
          connection.query(sql, [username, hashedPassword, email], (err) => {
            if (err) {
              console.error("Error registering user:", err);
              return res.status(500).send("Error registering user");
            }
            res.status(201).send("User registered successfully");
          });
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
          { userID: user.userID, username: user.username, role: user.role, email: user.email },
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

module.exports = { register, login };
