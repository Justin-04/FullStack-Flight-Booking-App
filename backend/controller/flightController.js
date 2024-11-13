const connection =require('../database/Mysql.js');


exports.getFlights = async (req,res) =>{
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
}
exports.addFlight = (req, res) => {
    const { from, to, date, duration, price } = req.body;
    const sql = 'INSERT INTO flights (`From`, `To`, `Date`, `Duration`, `Price`, `flight_status`) VALUES (?, ?, ?, ?, ?, "Available")';
  
    connection.query(sql, [from, to, date, duration, price], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error adding flight");
      }
  
      const getFlightIdSql = "SELECT FlightID FROM flights ORDER BY FlightID DESC LIMIT 1";
      connection.query(getFlightIdSql, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Error retrieving flight ID");
        }
  
        const flightId = result[0].FlightID;
  
        const seatInsertionSql = `
        INSERT INTO seats (FlightID, SeatNumber, Class, Status, seat_price) VALUES
        (${flightId}, 1, 'Economy', 'Available', 100), (${flightId}, 2, 'Economy', 'Booked', 100), 
        (${flightId}, 3, 'Economy', 'Available', 100), (${flightId}, 4, 'Economy', 'Booked', 100), 
        (${flightId}, 5, 'Economy', 'Available', 100), (${flightId}, 6, 'Economy', 'Booked', 100),
        (${flightId}, 7, 'Economy', 'Available', 100), (${flightId}, 8, 'Economy', 'Booked', 100), 
        (${flightId}, 9, 'Economy', 'Available', 100), (${flightId}, 10, 'Economy', 'Booked', 100), 
        (${flightId}, 11, 'Economy', 'Available', 100), (${flightId}, 12, 'Economy', 'Booked', 100),
        (${flightId}, 13, 'Premium', 'Available', 450), (${flightId}, 14, 'Premium', 'Booked', 450), 
        (${flightId}, 15, 'Premium', 'Available', 450), (${flightId}, 16, 'Premium', 'Booked', 450), 
        (${flightId}, 17, 'Premium', 'Available', 450), (${flightId}, 18, 'Premium', 'Booked', 450),
        (${flightId}, 19, 'Premium', 'Available', 450), (${flightId}, 20, 'Premium', 'Booked', 450), 
        (${flightId}, 21, 'Premium', 'Available', 450), (${flightId}, 22, 'Premium', 'Booked', 450), 
        (${flightId}, 23, 'Premium', 'Available', 450), (${flightId}, 24, 'Premium', 'Booked', 450)
      `;
      
        connection.query(seatInsertionSql, (err, seatResults) => {
          if (err) {
            console.log(err);
            return res.status(500).send("Error adding seats");
          }
  
          res.send("Flight and seats added successfully");
        });
      });
    });
  };
  