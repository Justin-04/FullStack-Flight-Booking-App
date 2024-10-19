import React from 'react';
import './Welcome.css';
import PlanesAnimation from '../PlaneAnimation';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <span className='travel'>LET'S TRAVEL THE WORLD!</span>
        <h1>Find and Book a great <span className='hollow'>Experience</span></h1>
        <button className='travel-button'>GET STARTED!</button>
    </div>
  );
};

export default Welcome;
