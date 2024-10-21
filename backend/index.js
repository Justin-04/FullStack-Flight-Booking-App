const express = require('express');
const mysql = require('mysql');
const connection = require('./database/Mysql');
const cors=require('cors');
const app = express();
app.use(cors());
connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get('/', (req, res) => {

    let sql="Select * from flights";
    connection.query(sql,(err,results)=>{
        if(err){
        console.log(err);
        }
        else{
            res.send(results);
        }
    })
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
