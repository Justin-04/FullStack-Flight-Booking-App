const express = require('express');
const connection=require('../database/Mysql');

const router = express.Router();

router.post("/seat",(req,res)=>{
const {flightID} = req.body;

let sql="SELECT SeatId,SeatNumber,Class,Status,price FROM flights f inner join seats s on f.FlightID=s.FlightId where s.`FlightID`=?";

connection.query(sql,[flightID],
(err,results)=>{
    if(err){
        console.log(error);
    }
    else{
        res.send(results);
    }
}


)


});






module.exports=router;