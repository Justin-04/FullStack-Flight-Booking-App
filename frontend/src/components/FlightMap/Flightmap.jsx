import { useState, useEffect } from "react";
import "./Flightmap.css";
import x from "../../images/x-symbol.svg";
const Flightmap = () => {
  const [data, setData] = useState([]);
  const [clickedSeat, setClickedSeat] = useState(null);

  useEffect(() => {
    const mockData = [
      { id: 1, class: "Premium", status: "Available" },
      { id: 2, class: "Premium", status: "Booked" },
      { id: 3, class: "Premium", status: "Available" },
      { id: 4, class: "Premium", status: "Booked" },
      { id: 5, class: "Premium", status: "Available" },
      { id: 6, class: "Premium", status: "Booked" },
      { id: 7, class: "Premium", status: "Available" },
      { id: 8, class: "Premium", status: "Booked" },
      { id: 9, class: "Premium", status: "Available" },
      { id: 10, class: "Premium", status: "Booked" },
      { id: 11, class: "Premium", status: "Available" },
      { id: 12, class: "Premium", status: "Booked" },
      { id: 13, class: "Economy", status: "Available" },
      { id: 14, class: "Economy", status: "Booked" },
      { id: 15, class: "Economy", status: "Available" },
      { id: 16, class: "Economy", status: "Booked" },
      { id: 17, class: "Economy", status: "Available" },
      { id: 18, class: "Economy", status: "Booked" },
      { id: 19, class: "Economy", status: "Available" },
      { id: 20, class: "Economy", status: "Booked" },
      { id: 21, class: "Economy", status: "Available" },
      { id: 22, class: "Economy", status: "Booked" },
      { id: 23, class: "Economy", status: "Available" },
      { id: 24, class: "Economy", status: "Booked" },
    ];
    setData(mockData);
  }, []);

  const handleClick = (seatId) => {
    setClickedSeat(seatId);
  };

  const getSeatClass = (seat) => {
    if (seat.status === "Booked") {
      return "seats occupied";
    } else if (seat.class === "Premium") {
      return "seats premium available";
    } else if (seat.class === "Economy") {
      return "seats economy available";
    }
  };

  return (
    <div className="flight-map">
      <div className="right-section">
        {data.length > 0 ? (
          data.map((seat) => (
            <div
              disabled
              key={seat.id}
              id={`seat${seat.id}`}
              className={getSeatClass(seat)}
              onClick={() => handleClick(seat.id)}
              style={
                clickedSeat === seat.id ? { border: "3px solid black", scale:"1.1"} : {}
              }
            >
              {seat.status === "Booked" ? <div>
                 <img style={{width:"80%",margin:"auto",transform:"translateY(1px)"}} 
              
              src={x} /> </div>
              : `Seat ${seat.id}`}
            </div>
          ))
        ) : (
          <p>Loading seats...</p>
        )}
      </div>
      <div className="left-section">
        <p>Description: Select your seat</p>
        <span>Seat Selected: {clickedSeat}</span>
        <table className="flightmap-table">
          <tr>
            <td>
              <span className="blue">Blue</span>
            </td>
            <td>
              <span className="green">Blue</span>
            </td>
            <td>
              <span className="red">Blue</span>
            </td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>Economy</td>
            <td>Occupied</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Flightmap;
