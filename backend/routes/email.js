const express = require("express");
const router = express.Router();
const userController = require("../controller/emailController");

router.post("/", userController.sendTicketConfirmation);
router.post("/forgotPass", userController.resetPassword);

module.exports = router;
