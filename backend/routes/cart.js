const express = require("express");const verifyToken = require("../auth/authMiddelware");
const router = express.Router();
const {addToCart,getCart} =require("../controller/cartController");

router.post("/", verifyToken, addToCart);

router.get("/getall", getCart );

module.exports = router;
