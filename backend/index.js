const express = require("express");
const mysql = require("mysql");
const connection = require("./database/Mysql");
const user=require('./routes/user');
const cors = require("cors");
const flights = require("./routes/flights");
const seat=require("./routes/seat");
const cart=require("./routes/cart");
const email=require("./routes/email");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user",user);
app.use("/flight",flights);
app.use("/seat",seat);
app.use("/cart",cart);
app.use("/email",email);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
