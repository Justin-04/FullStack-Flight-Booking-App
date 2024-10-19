import React, { useState } from 'react';
import {motion} from 'framer-motion';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav className="navbar"
    initial={{ y: -50, opacity: 0 }}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.5}}
    viewport={{ once: false, amount: 0.2 }}

    >
      <div className="nav-logo">Flight Booking</div>
      <ul className={isOpen ? "nav-links nav-active" : "nav-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/flights">Flights</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </motion.nav>
  );
};

export default Nav;
