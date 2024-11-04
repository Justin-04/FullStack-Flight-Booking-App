import React, { useState, useEffect } from "react";
import "./MyFlight.css";
import { motion } from 'framer-motion';
import axios from "axios";

// Global list to store fetched results and maintain state across renders
let results = JSON.parse(localStorage.getItem('results')) || [];

const MyFlights = ({ onFlightSelect, cart }) => {
  const [flights, setFlights] = useState(results); // Start with globally stored results
  const [empty, setEmpty] = useState(false);
  const [flight_ID, setFlight_ID] = useState(() => localStorage.getItem('fid') || 'none');

  const handleFlight = (flightId) => {
    onFlightSelect(flightId);
    setFlight_ID(flightId);
  };

  const fetchAndAddFlight = async (flightID) => {
    try {
      const result = await axios.post("http://localhost:8080/flight/flightId", { flightID });
      
      // Check if the flight already exists in results to prevent duplicates
      if (!results.some(flight => flight.FlightID === result.data[0].FlightID)) {
        results = [...results, result.data[0]]; // Update the global results array
        setFlights(results); // Update component state
        localStorage.setItem('results', JSON.stringify(results)); // Persist globally updated results
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Whenever `cart` changes, retrieve the last item and fetch its details if unique
  useEffect(() => {
    if (cart.length === 0) {
      setEmpty(true);
      return;
    }

    setEmpty(false);
    const lastItem = cart[cart.length - 1];
    const lastFetchedFlight = results.find(flight => flight.FlightID === lastItem);

    if (!lastFetchedFlight) {
      // Only fetch if the last item in cart hasn't been fetched
      fetchAndAddFlight(lastItem);
    }
  }, [cart]);

  // Persist selected flight ID
  useEffect(() => {
    localStorage.setItem('fid', flight_ID);
  }, [flight_ID]);

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
            {flights.map((flight) => (
              <motion.div
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                key={flight.FlightID}
                className="flight-card"
              >
                <div className="flight-info">
                  <center><h2>Flight to {flight.To}</h2></center>
                  <div>
                    <p><strong>From:</strong> {flight.From}</p>
                    <p><strong>To:</strong> {flight.To}</p>
                    <p><strong>Date:</strong> {flight.Date}</p>
                    <p><strong>Duration:</strong> {flight.Duration} hrs</p>
                    <p><strong>Price:</strong> ${flight.Price}</p>
                    <button onClick={() => handleFlight(flight.FlightID)}>Select Flight</button>
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
