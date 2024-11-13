const connection = require("../database/Mysql");

exports.getSeats = (req, res) => {
  const { flightID } = req.body;

  let sql =
    "SELECT SeatId,SeatNumber,Class,Status,price,seat_price FROM flights f inner join seats s on f.FlightID=s.FlightId where s.`FlightID`=?";

  connection.query(sql, [flightID], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

exports.addSeat = (req, res) => {
  const { seatID, flightID } = req.body;
  const status_ = "Full";

  const updateSeatSql = "UPDATE seats SET Status = 'Booked' WHERE SeatID = ?";
  connection.query(updateSeatSql, [seatID], (err, seatResults) => {
    if (err) {
      console.error("Error updating seat status:", err);
      return res.status(500).send("Error updating seat status.");
    }

    if (seatResults.affectedRows === 0) {
      return res.status(404).send("Seat not found or already booked.");
    }

    const checkSeatsSql = "SELECT Status FROM seats WHERE FlightID = ?";
    connection.query(checkSeatsSql, [flightID], (err, seatStatuses) => {
      if (err) {
        console.error("Error checking seat statuses:", err);
        return res.status(500).send("Error checking seat statuses.");
      }

      const allSeatsBooked = seatStatuses.every(
        (seat) => seat.Status === "Booked"
      );

      if (allSeatsBooked) {
        const updateFlightSql =
          "UPDATE flights SET flight_status = ? WHERE FlightID = ?";
        connection.query(updateFlightSql, [status_, flightID], (err) => {
          if (err) {
            console.error("Error updating flight status:", err);
            return res.status(500).send("Error updating flight status.");
          }

          const deleteFromCart = "DELETE FROM cart WHERE FlightID = ?";
          connection.query(deleteFromCart, [flightID], (err) => {
            if (err) {
              console.error("Error deleting from cart:", err);
              return res.status(500).send("Error deleting flight from carts.");
            }

            res.send(
              "Seat booked, flight marked 'Full', and removed from carts."
            );
          });
        });
      } else {
        res.send("Seat status updated to 'Booked'.");
      }
    });
  });
};
