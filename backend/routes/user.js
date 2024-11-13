const express = require("express");
const { register, login, getProfile} = require("../controller/userController");
const verifyToken=require("../auth/authMiddelware");
const router = express.Router();



router.post("/register", register);
router.post("/login", login);
router.get("/getProfile",verifyToken,getProfile);

module.exports = router;