const express= require('express');
const verifyToken=require('./authMiddelware');
const router = express.Router();


router.post('/',verifyToken,(req,res)=>{

    res.send("Hello justin");
});



module.exports = router;