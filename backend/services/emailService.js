const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const ejs = require("ejs");
const connection = require("../database/Mysql");
const sendEmail = require('../config/emailConfig').sendEmail;

exports.verifyToken = (token, callback) => {
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return callback(err);
    callback(null, decoded);
  });
};

exports.renderTicketEmail = (data, callback) => {
  const filePath = path.join(__dirname, "../views/index.ejs");
  ejs.renderFile(filePath, data, (err, emailData) => {
    if (err) return callback(err);
    callback(null, emailData);
  });
};

exports.sendEmail = (to, subject, content, callback) => {
  sendEmail(to, subject, content, (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

exports.findUserByEmail = (email, callback) => {
  connection.query('SELECT userID FROM user WHERE email = ?', [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0] || null);
  });
};

exports.generatePassword = (callback) => {
  let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let n = "0123456789";
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += s.charAt(Math.floor(Math.random() * s.length));
  }
  for (let i = 0; i < 3; i++) {
    result += n.charAt(Math.floor(Math.random() * n.length));
  }
  const password = result.split('').sort(() => 0.5 - Math.random()).join('');
  callback(null, password);
};

exports.hashPassword = (password, callback) => {
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return callback(err);
    callback(null, hashedPassword);
  });
};

exports.updateUserPassword = (userID, newPassword, callback) => {
  connection.query('UPDATE user SET password = ? WHERE userID = ?', [newPassword, userID], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};
