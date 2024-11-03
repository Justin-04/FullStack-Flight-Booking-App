const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


const verifyToken = (req, res, next) => {
   const token = req.header('Authorization'); 

    if (!token) {
        return res.status(403).send("Access denied. No token provided.");
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        console.log(decoded);
        next(); 
    } catch (error) {
        res.status(401).send("Invalid token.");
    }
};
  
module.exports = verifyToken;
