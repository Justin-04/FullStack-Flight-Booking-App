import React from "react";
import { motion } from "framer-motion";
import planeImage from '../images/airplane-welcome-animation.jpg'; 

const PlaneAndTextAnimation = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100px",
        textAlign: "center",
        overflow: "hidden", 
        margin: "0 auto", 
      }}
    >
      {/* Plane Animation */}
      <motion.img
        src={planeImage}
        alt="Plane"
        initial={{ x: "-100vw" }} 
        animate={{ x: "100vw" }}
        transition={{ duration: 3, ease: "easeInOut" }} 
        style={{
          position: "absolute",
          top: "-30%", 
          left: 0,
          transform: "translateY(-50%)",
          width: "300px" 
        }}
      />

      <motion.h1
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2, duration: 1}} 
        style={{
          marginTop: "10px", 
          fontSize: "1.8em", 
          color: "#333",
        }}
      >
        Find And Book A Great Experience
      </motion.h1>
    </div>
  );
};

export default PlaneAndTextAnimation;
