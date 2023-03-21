const express = require('express');
const router = express.Router();
module.exports = function(){
    router.get('',(req,res,next)=>{
        res.send('Welcome to API');
    });
    return router;
}