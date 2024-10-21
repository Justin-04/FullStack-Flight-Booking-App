import React from 'react';
import './Welcome.css';
import { scrollToSection } from '../../utilities/scroll';
import {motion} from 'framer-motion'
const Welcome = () => {
  return (
    <div className="welcome-container">
      <span className='travel'>LET'S TRAVEL THE WORLD!</span>
        <h1>Find and Book a great <span className='hollow'>Experience</span></h1>
        <motion.button
        onClick={()=>scrollToSection("search")}
         className='travel-button'
             whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
           animate={{
            rotate: [0, -5, 5, -5, 0], 
          }}
          transition={{
            duration: 0.5, 
            ease: "easeInOut",
            repeat: Infinity, 
            repeatDelay: 3, 
          }}
        
        >GET STARTED!</motion.button>
    </div>
  );
};

export default Welcome;
