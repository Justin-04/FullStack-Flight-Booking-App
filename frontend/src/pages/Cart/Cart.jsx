import React, { useEffect, useState } from "react";
import "./Cart.css";
import MyFlights from "../../components/myFlights/MyFlights";
import Flightmap from "../../components/FlightMap/Flightmap";
import Card from "../../components/Card/Card";
import Checkout from "../../components/Checkout/Checkout";
import { Link } from "react-router-dom";

const Cart = ({fidParent}) => {
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
  const [completedSteps, setCompletedSteps] = useState([]);
  const [meal,setMeal]=useState("");





  const handleCard = (cardNumber, expiryDate, cardOwner, ccv) => {
    setCardNumber1(cardNumber);
    setExpiryDate1(expiryDate);
    setCardOwner1(cardOwner);
    setCV1(ccv);
    setPage("Checkout");
    setCompletedSteps([...completedSteps, "Payment"]); 
  };

  const handleSeat = (seat_, price_,meal_) => {
    setSeat(seat_);
    setPrice(price_);
    setPage("Payment");
    setMeal(meal_);
    setCompletedSteps([...completedSteps, "Map"]); 
  };

  function hide() {
    return cardNumber1.substring(14, 19);
  }

  const checkoutEntry = {
    cardNumber: "Ends with " + "*" + hide() + "*",
    expiryDate: localStorage.getItem("expiryDate" || 'none'),
    cardOwner: localStorage.getItem("cardOwner" || 'none'),
    ccv: "***",
    flightID: localStorage.getItem("fid" || 'none'),
    seat: localStorage.getItem("clickedSeat"||'none'),
    price: localStorage.getItem("price" || 'none'),
    meal: localStorage.getItem("meal"||'none')
  };

  const handleFinish = () => {
    setCompletedSteps([...completedSteps,"Checkout"]);
  };

  const handleFlight1 = (id1) => {
    setFid(id1);
    setPage("Map");
    setCompletedSteps([...completedSteps, "Flights"]); 
  };

  useEffect(() => {
    setElement(<MyFlights onFlightSelect={handleFlight1} />);
  }, []);

  useEffect(() => {
    if (page === "Map") {
      setElement(<Flightmap seat_={handleSeat} />);
    } else if (page === "Payment") {
      setElement(<Card handle={handleCard} />);
    } else if (page === "Checkout") {
      setElement(
        <Checkout message={handleFinish} checkoutEntry={checkoutEntry} />
      );
    } else {
      setElement(<MyFlights onFlightSelect={handleFlight1} />);
    }
  }, [page]);

  function handleClick_(result) {
    setPage(result); 
  }

  const isCompleted = (step) => completedSteps.includes(step);

  return (
    <div className="main-cart">
   
    <button onClick={()=>  console.log("fidParent",fidParent)  }>press me</button>
      <Link to="/"  
      style={{textDecoration:"none",border:"1px solid black",borderRadius:"15px",padding:"4px",backgroundColor:"blue",
        color:"white"



      }}
      
      
      
      >Go Back to Home Page</Link>
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