const express= require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const bodyParser = require('body-parser');
const connection= require('../database/Mysql');
const verifyToken=require('./authMiddelware');
const router = express.Router();


router.post('/',verifyToken,(req,res)=>{

    res.send("Hello justin");
});



module.exports = router;