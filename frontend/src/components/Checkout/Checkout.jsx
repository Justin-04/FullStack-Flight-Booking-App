import React, { useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'
const Checkout = ({ checkoutEntry,message }) => { //TODO call all apis respectivly 
  const user_ID = useContext(MyContext);
  const navigate=useNavigate();
  const  handleFinish = () =>{
    navigate("/");
    localStorage.removeItem("clickedSeat");
    localStorage.removeItem("price");
    localStorage.removeItem("meal");
    localStorage.removeItem("cardNumber");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("cardOwner");
    localStorage.removeItem("ccv");
    localStorage.removeItem("ccv");
    message();
  }
  return (
    <>
      <div>
        {
             <div className="receipt-container">
             <div key="checkout-entry" className="checkout-entry">
               <h2>Receipt</h2>
               <p><strong>Card Number:</strong> {checkoutEntry.cardNumber}</p>
               <p><strong>Expiry Date:</strong> {checkoutEntry.expiryDate}</p>
               <p><strong>Card Owner:</strong> {checkoutEntry.cardOwner}</p>
               <p><strong>CCV:</strong> {checkoutEntry.ccv}</p>
               <p><strong>Flight ID:</strong> {checkoutEntry.flightID}</p>
               <p><strong>Seat:</strong> {checkoutEntry.seat}</p>
               <p><strong>Meal:</strong> {checkoutEntry.meal}</p>
               <p><strong>Price:</strong> {checkoutEntry.price}$</p>
               
             </div>
             <button className="finish-button" onClick={handleFinish}>Finish</button>
           </div>
        }
      </div>
    </>
  );
};

export default Checkout;
