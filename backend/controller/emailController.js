const userService = require("../services/userService");

exports.sendTicketConfirmation = (req, res) => {
  const token = req.header("authorization");
  const { flightId, date, price, seatNumber, seatClass } = req.body;

  userService.verifyToken(token, (err, decoded) => {
    if (err) {
      return res.status(401).send({ success: false, error: "Invalid token" });
    }

    const { email, username } = decoded;

    userService.renderTicketEmail({ flightId, name: username, email, date, price, seatNumber, seatClass }, (err, emailData) => {
      if (err) {
        return res.status(500).send({ success: false, error: "EJS render error" });
      }

      userService.sendEmail(email, 'Ticket Confirmation', emailData, (err, result) => {
        if (err) {
          return res.status(500).send({ success: false, error: "Error sending email" });
        }
        res.status(200).send({ success: true, result });
      });
    });
  });
};

exports.resetPassword = (req, res) => {
  const { email } = req.body;

  userService.findUserByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).send("Server error occurred.");
    }

    if (!user) {
      return res.status(404).send("Email not found.");
    }

    userService.generatePassword((err, newPassword) => {
      if (err) {
        return res.status(500).send("Error generating password.");
      }

      userService.hashPassword(newPassword, (err, hashedPassword) => {
        if (err) {
          return res.status(500).send("Error hashing password.");
        }

        userService.updateUserPassword(user.userID, hashedPassword, (err) => {
          if (err) {
            return res.status(500).send("Error updating the password.");
          }

          userService.sendEmail(email, "Password reset", `Your new password is: ${newPassword}`, (err, result) => {
            if (err) {
              return res.status(500).send("Failed to send the email.");
            }
            res.status(200).send("Password reset successfully. Check your email for the new password.");
          });
        });
      });
    });
  });
};
