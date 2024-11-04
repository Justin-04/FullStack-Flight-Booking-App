const express = require("express");
const mysql = require("mysql");
const connection = require("./database/Mysql");
const user=require('./routes/userauth');
const cors = require("cors");
const flights = require("./routes/flights");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user",user);
app.use("/flight",flights);




const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://192.168.1.76:${PORT}`);
});
