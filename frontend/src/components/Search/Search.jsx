import React, { useState } from "react";
import { Reorder, motion } from "framer-motion";
import "./Search.css";

const Search = () => {
  const [flights, setFlights] = useState([
    { id: 1, departure: "New York", destination: "London", date: "2024-11-10" },
    {
      id: 2,
      departure: "Los Angeles",
      destination: "Paris",
      date: "2024-11-11",
    },
    { id: 3, departure: "Chicago", destination: "Tokyo", date: "2024-11-12" },
    { id: 4, departure: "Miami", destination: "Berlin", date: "2024-11-13" },
    {
      id: 5,
      departure: "San Francisco",
      destination: "Dubai",
      date: "2024-11-14",
    },
    { id: 6, departure: "Seattle", destination: "Rome", date: "2024-11-15" },
  ]);

  return (
    <div className="search-body">
      <div
        className="results-c"
      >
        <div className="topbar-search">
          <ul>
            <motion.li
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <input type="text" placeholder="Departure" />
            </motion.li>
            <motion.li
            initial={{ x: -120 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            
            >
              <input type="text" placeholder="Arrival" />
            </motion.li>
            <motion.li
               initial={{ x: -220 }}
               whileInView={{ x: 0 }}
               transition={{ duration: 1.5 }}
            >
              <input type="date" />
            </motion.li>
            <motion.li
               initial={{ x: -320 }}
               whileInView={{ x: 0 }}
               transition={{ duration: 2 }}>
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Search
              </motion.button>
            </motion.li>
          </ul>
        </div>

        <div
          className="search-result"
            >
          <Reorder.Group axis="y" values={flights} onReorder={setFlights}>
            {flights.map((flight) => (
              <Reorder.Item
                key={flight.id}
                value={flight}
                className="result-row"
              >
                <span className="column from">
                  <strong>From:</strong> {flight.departure}
                </span>
                <span className="column to">
                  <strong>To:</strong> {flight.destination}
                </span>
                <span className="column date">
                  <strong>Date:</strong> {flight.date}
                </span>
                <span className="column action">
                  <motion.button
                    whileHover={{
                      scale: 1.2,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Add to Cart
                  </motion.button>
                </span>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
};

export default Search;
