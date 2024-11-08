const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
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
      const result = await sendMail("chahine.justin6@gmail.com", data);
      res.status(200).send({ success: true, result });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ success: false, error: error.message });
    }
  });
});

module.exports = router;
