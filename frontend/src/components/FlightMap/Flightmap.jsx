import { useState, useEffect } from "react";
import "./Flightmap.css";
import x from "../../images/x-symbol.svg";
const Flightmap = ({seat_}) => {
  const [data, setData] = useState([]);
  const [clickedSeat, setClickedSeat] = useState('none');
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const mockData = [
      { id: 1, class: "Premium", status: "Available", price: 200 },
      { id: 2, class: "Premium", status: "Booked", price: 200 },
      { id: 3, class: "Premium", status: "Available", price: 200 },
      { id: 4, class: "Premium", status: "Booked", price: 200 },
      { id: 5, class: "Premium", status: "Available", price: 200 },
      { id: 6, class: "Premium", status: "Booked", price: 200 },
      { id: 7, class: "Premium", status: "Available", price: 200 },
      { id: 8, class: "Premium", status: "Booked", price: 200 },
      { id: 9, class: "Premium", status: "Available", price: 200 },
      { id: 10, class: "Premium", status: "Booked", price: 200 },
      { id: 11, class: "Premium", status: "Available", price: 200 },
      { id: 12, class: "Premium", status: "Booked", price: 200 },
      { id: 13, class: "Economy", status: "Available", price: 100 },
      { id: 14, class: "Economy", status: "Booked", price: 100 },
      { id: 15, class: "Economy", status: "Available", price: 100 },
      { id: 16, class: "Economy", status: "Booked", price: 100 },
      { id: 17, class: "Economy", status: "Available", price: 100 },
      { id: 18, class: "Economy", status: "Booked", price: 100 },
      { id: 19, class: "Economy", status: "Available", price: 100 },
      { id: 20, class: "Economy", status: "Booked", price: 100 },
      { id: 21, class: "Economy", status: "Available", price: 100 },
      { id: 22, class: "Economy", status: "Booked", price: 100 },
      { id: 23, class: "Economy", status: "Available", price: 100 },
      { id: 24, class: "Economy", status: "Booked", price: 100 },
    ];

    setData(mockData);
  }, []);

  const handleClick = (seatId, price1) => {
    setClickedSeat(seatId);
    setPrice(price1);
  };

  const handleClick1 = () =>{
    seat_(clickedSeat,price);
  }
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
              onClick={() => handleClick(seat.id, seat.price)}
              style={
                clickedSeat === seat.id
                  ? { border: "3px solid black", scale: "1.1" }
                  : {}
              }
            >
              {seat.status === "Booked" ? (
                <div>
                  <img
                    style={{
                      width: "80%",
                      margin: "auto",
                      transform: "translateY(1px)",
                    }}
                    src={x}
                  />{" "}
                </div>
              ) : (
                `Seat ${seat.id}`
              )}
            </div>
          ))
        ) : (
          <p>Loading seats...</p>
        )}
      </div>
      <div className="left-section">
        <div className="description-flight">
          <div>Description: Select your seat</div>
          <div>Seat Selected: {clickedSeat}</div>
          <div>Price: {price} $</div>
          <select name="" id="">
            <option value="" disabled selected>
              -Choose Your meal-
            </option>
            <option value="">Meat</option>
            <option value="">Chicken</option>
            <option value="">Vegan</option>
          </select>
        <div><button onClick={handleClick1}>--Next--</button></div>
        </div>
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
