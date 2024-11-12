const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const ejs = require("ejs");
const connection = require("../database/Mysql");
const sendEmail = require('../config/emailConfig').sendEmail; 

function passwordGenerator() {
  let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let n = "0123456789";
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += s.charAt(Math.floor(Math.random() * s.length));
  }
  for (let i = 0; i < 3; i++) {
    result += n.charAt(Math.floor(Math.random() * n.length));
  }
  return result.split('').sort(() => 0.5 - Math.random()).join('');
}

exports.sendTicketConfirmation = async (req, res) => {
  const token = req.header("authorization");
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const { flightId, date, price, seatNumber, seatClass } = req.body;
  const email = decoded.email;
  const name = decoded.username;
  const filePath = path.join(__dirname, "../views/index.ejs");

  ejs.renderFile(filePath, { flightId, name, email, date, price, seatNumber, seatClass }, async (err, data) => {
    if (err) {
      console.error("Error rendering EJS template:", err);
      return res.status(500).send({ success: false, error: "EJS render error" });
    }

    try {
      const result = await sendEmail(email, 'Ticket Confirmation', data);
      res.status(200).send({ success: true, result });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ success: false, error: error.message });
    }
  });
};

exports.resetPassword = async (req, res) => {
  const { email } = req.body;

  connection.query('SELECT userID FROM user WHERE email = ?', [email], async (err, result) => {
    if (err) {
      res.status(500).send("Server error occurred.");
      return;
    }

    if (result.length === 0) {
      res.status(404).send("Email not found.");
    } else {
      try {
        let pass = passwordGenerator();
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(pass, saltRounds);

        const emailResult = await sendEmail(email, "Password reset", `Your new password is: ${pass}`);
        if (!emailResult) {
          res.status(500).send("Failed to send the email.");
          return;
        }

        connection.query('UPDATE user SET password = ? WHERE userID = ?', [hashedPassword, result[0].userID], (err, results) => {
          if (err) {
            console.error('Error updating the password:', err);
            res.status(500).send("Error updating the password.");
            return;
          }
          res.status(200).send("Password reset successfully. Check your email for the new password.");
        });
      } catch (e) {
        console.error("Error while processing the password reset:", e);
        res.status(500).send("Error while processing the password reset.");
      }
    }
  });
};
