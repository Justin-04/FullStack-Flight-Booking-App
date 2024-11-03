const express = require("express");
const mysql = require("mysql");
const connection = require("./database/Mysql");
const user=require('./routes/user');
const cors = require("cors");
const app = express();
app.use(cors());
const auth = require("./auth/authentication");

app.use(express.json());

app.use("/user",user);
app.use("/auth", auth);

app.get("/", (req, res) => {
  let sql = "Select * from flights";
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
