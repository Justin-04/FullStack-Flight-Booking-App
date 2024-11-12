const  express = require('express');
const verifyToken = require('../auth/authMiddelware');
const router = express.Router();
const connection =require('../database/Mysql.js');

router.post("/", (req, res) => {
    const { departure, arrival, date } = req.body;
    
    if (departure && arrival && date) {
        const sql = "SELECT * FROM flights WHERE `From` = ? AND `To` = ? AND `Date` = ?";
        connection.query(sql, [departure, arrival, date], (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("An error occurred while fetching the flights.");
            } else {
                res.send(results);
            }
        });
    } else {
        const sql = "SELECT * FROM flights";
        connection.query(sql, (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("An error occurred while fetching the flights.");
            } 
            else {
                res.send(results);
            }
        });
    }
});



router.post("/flightId", (req, res) => {
    const { flightID } = req.body;
    connection.query("Select * from flights where `FlightID`=?",[flightID],
        (err,results)=>{
            if (err) {
                console.error(err);
                res.status(500).send("An error occurred while fetching the flights.");
            } else {
                res.send(results);
            }
        }

    )
});


module.exports=router;