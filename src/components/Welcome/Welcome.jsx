import React from 'react';
import './Welcome.css';
import PlanesAnimation from '../PlaneAnimation';

const Welcome = () => {
  return (
    <div className="welcome-container">
        <PlanesAnimation/>
      <img
        src={require('../../images/airplaine-welcome.jpg')} 
        alt="Airplane"
        className="welcome-image"
      />
    </div>
  );
};

export default Welcome;
