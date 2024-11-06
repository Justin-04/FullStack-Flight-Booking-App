const express = require("express");
const connection = require("../database/Mysql");

const router = express.Router();

router.post("/", (req, res) => {
  const { flightID } = req.body;

  let sql =
    "SELECT SeatId,SeatNumber,Class,Status,price FROM flights f inner join seats s on f.FlightID=s.FlightId where s.`FlightID`=?";

  connection.query(sql, [flightID], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

router.put("/addSeat", (req, res) => {
    const { seatID } = req.body;
  
    const sql = "UPDATE seats SET Status = 'Booked' WHERE SeatID = ?";
  
    connection.query(sql, [seatID], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error updating seat status.");
      }
  
      if (results.affectedRows === 0) {
        return res.status(404).send("Seat not found or already booked.");
      }
  
      res.send("Seat status updated to 'Booked' successfully.");
    });
  });
  

module.exports = router;
