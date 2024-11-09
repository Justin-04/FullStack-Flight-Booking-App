const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const connection=require("../database/Mysql");
const bcrypt= require("bcrypt");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const jwt= require('jsonwebtoken');
const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true, 
    auth: {
      user: "chahine.justin@gmail.com",
      pass: "yntozkdtqohusujf",
    },
  });
  

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
    result = result.split('').sort(() => 0.5 - Math.random()).join('');
    return result;
  }

function sendMail(to,message) {
  return transporter.sendMail({
    from: "chahine.justin@gmail.com",
    to: to,
    subject: 'Ticket Confirmation',
    html: message,
  });
}

router.post("/", (req, res) => {
  const token = req.header("authorization");
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const {  flightId, date, price, seatNumber, seatClass  } = req.body;
  const email= decoded.email;
  const name=decoded.username;
  const filePath = path.join(__dirname, "../views/index.ejs");

  ejs.renderFile(filePath, { flightId, name, email, date, price,seatNumber, seatClass }, async (err, data) => {
    if (err) {
      console.error("Error rendering EJS template:", err);
      return res.status(500).send({ success: false, error: "EJS render error" });
    }

    try {
      const result = await sendMail(email, data);
      res.status(200).send({ success: true, result });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ success: false, error: error.message });
    }
  });
});

router.post("/forgotPass", async (req, res) => {
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
        const hashedPassword = await bcrypt.hash(pass, saltRounds); // Hash the new password

        const emailResult = sendMail(email, `Your new password is: ${pass}`);
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
          console.log('Password updated successfully');
          res.status(200).send("Password reset successfully. Check your email for the new password.");
        });
      } catch (e) {
        console.error("Error while processing the password reset:", e);
        res.status(500).send("Error while processing the password reset.");
      }
    }
  });
});



module.exports = router;
