import React, { useState } from "react";
import "./MyFlight.css";
import ny from '../../images/newyork.png';
import paris from '../../images/paris.png';
import berlin from '../../images/berlin.png';
import { motion } from 'framer-motion';

const MyFlights = ({ onFlightSelect }) => {  
  const [empty, setEmpty] = useState(false);
  const [flight_ID, setFlight_ID] = useState('');

  const handleFlight = (flightId) => {
    onFlightSelect(flightId); 
  };

  const bookedFlights = [
    {
      flightId: 1,
      departure: "New York",
      arrival: "London",
      date: "2024-11-10",
      duration: "7 hrs",
      imageUrl: ny
    },
    {
      flightId: 2,
      departure: "Los Angeles",
      arrival: "Paris",
      date: "2024-11-12",
      duration: "10 hrs",
      imageUrl: paris
    },
    {
      flightId: 3,
      departure: "Tokyo",
      arrival: "Berlin",
      date: "2024-11-15",
      duration: "12 hrs",
      imageUrl: berlin
    }
  ];

  return (
    <>
      <div className="flights" style={empty ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}}>
        <center><h1>My Flights</h1></center>
        {empty ? (
          <center>
            <h1 className="empty-message">You Didn't Book Any Flights</h1>
          </center>
        ) : (
          <div className="myflights-grid">
            {bookedFlights.map((flight) => (
              <motion.div
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                key={flight.flightId}
                className="flight-card"
              >
                <img src={flight.imageUrl} alt={`Flight to ${flight.arrival}`} className="flight-image" />
                <div className="flight-info">
                  <center><h2>Flight to {flight.arrival}</h2></center>
                  <div>
                    <p><strong>From:</strong> {flight.departure}</p>
                    <p><strong>To:</strong> {flight.arrival}</p>
                    <p><strong>Date:</strong> {flight.date}</p>
                    <p><strong>Duration:</strong> {flight.duration}</p>
                    <button onClick={() => handleFlight(flight.flightId)}>Click</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyFlights;
