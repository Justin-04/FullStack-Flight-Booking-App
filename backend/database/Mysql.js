const mysql=require("mysql2");


var connection = mysql.createConnection({
host:'localhost',
database:'test',
user:'root',
password:'2004j'



});

module.exports = connection;
