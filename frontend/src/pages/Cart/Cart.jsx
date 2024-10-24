import React, { useEffect, useState } from "react";
import "./Cart.css";
import MyFlights from "../../components/myFlights/MyFlights";
import Flightmap from "../../components/FlightMap/Flightmap";
import Card from "../../components/Card/Card";
import Checkout from "../../components/Checkout/Checkout";

const Cart = () => {
  const [page, setPage] = useState("");
  const [element, setElement] = useState("");
  const [seat, setSeat] = useState("");
  const [cardNumber1, setCardNumber1] = useState("");
  const [expiryDate1, setExpiryDate1] = useState("");
  const [cardOwner1, setCardOwner1] = useState("");
  const [ccv1, setCV1] = useState("");
  const [fid, setFid] = useState("");
  const [checkout, setCheckout] = useState([]);
  const [price, setPrice] = useState("");
  const [completedSteps, setCompletedSteps] = useState([]); // Track completed steps

  const handleCard = (cardNumber, expiryDate, cardOwner, ccv) => {
    setCardNumber1(cardNumber);
    setExpiryDate1(expiryDate);
    setCardOwner1(cardOwner);
    setCV1(ccv);
    setPage("Checkout");
    setCompletedSteps([...completedSteps, "Payment"]); // Mark Payment as done
  };

  const handleSeat = (seat_, price_) => {
    setSeat(seat_);
    setPrice(price_);
    setPage("Payment");
    setCompletedSteps([...completedSteps, "Map"]); // Mark Map as done
  };

  function hide() {
    return cardNumber1.substring(14, 19);
  }

  const checkoutEntry = {
    cardNumber: "Ends with " + "*" + hide() + "*",
    expiryDate: expiryDate1,
    cardOwner: cardOwner1,
    ccv: "***",
    flightID: fid,
    seat: seat,
    price: price,
  };

  const handleMessageChange = () => {
    console.log(checkoutEntry);
  };

  const handleFlight1 = (id1) => {
    setFid(id1);
    setPage("Map");
    setCompletedSteps([...completedSteps, "Flights"]); // Mark Flights as done
  };

  useEffect(() => {
    setElement(<MyFlights onFlightSelect={handleFlight1} />);
  }, []);

  useEffect(() => {
    // Update the element based on the current `page`
    if (page === "Map") {
      setElement(<Flightmap seat_={handleSeat} />);
    } else if (page === "Payment") {
      setElement(<Card handle={handleCard} />);
    } else if (page === "Checkout") {
      setElement(
        <Checkout message={handleMessageChange} checkoutEntry={checkoutEntry} />
      );
    } else {
      setElement(<MyFlights onFlightSelect={handleFlight1} />);
    }
  }, [page]);

  function handleClick_(result) {
    setPage(result); // Trigger page change
  }

  // Utility function to check if a step is completed
  const isCompleted = (step) => completedSteps.includes(step);

  return (
    <div className="main-cart">
      <ul>
        <li
          onClick={() => handleClick_("Flights")}
          className={isCompleted("Flights") ? "completed-step" : ""}
        >
          Flights
        </li>
        <li
          onClick={() => handleClick_("Map")}
          className={isCompleted("Map") ? "completed-step" : ""}
        >
          Flight Map
        </li>
        <li
          onClick={() => handleClick_("Payment")}
          className={isCompleted("Payment") ? "completed-step" : ""}
        >
          Payment
        </li>
        <li
          onClick={() => handleClick_("Checkout")}
          className={isCompleted("Checkout") ? "completed-step" : ""}
        >
          Checkout
        </li>
      </ul>
      {element}
    </div>
  );
};

export default Cart;
