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

router.put("/addSeat", (req, res) => {
  const { seatID, flightID } = req.body;
  const status_ = "Full";

  const updateSeatSql = "UPDATE seats SET Status = 'Booked' WHERE SeatID = ?";
  connection.query(updateSeatSql, [seatID], (err, seatResults) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error updating seat status.");
    }

    if (seatResults.affectedRows === 0) {
      return res.status(404).send("Seat not found or already booked.");
    }

    const checkSeatsSql = "SELECT Status FROM seats WHERE FlightID = ?";
    connection.query(checkSeatsSql, [flightID], (err, seatStatuses) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error checking seat statuses.");
      }

      let allSeatsBooked = true;
      for (let i = 0; i < seatStatuses.length; i++) {
        if (seatStatuses[i].Status !== "Booked") {
          allSeatsBooked = false;
          break;
        }
      }

      if (allSeatsBooked) {
        const updateFlightSql = "UPDATE flights SET Status = ? WHERE FlightID = ?";
        connection.query(updateFlightSql, [status_, flightID], (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send("Error updating flight status.");
          }

          res.send("Seat status updated to 'Booked' and flight status updated to 'Full'.");
        });
      } else {
        res.send("Seat status updated to 'Booked'.");
      }
    });
  });
});


module.exports = router;
