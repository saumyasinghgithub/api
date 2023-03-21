const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
module.exports = function(){
    router.get('/genapikey',(req,res,next)=>{
        res.send(bcrypt.hashSync(process.env.JWTSECRET,8));
    });
    router.get('/',(req,res,next)=>{
        res.send('Welcome to API');
    });
    return router;
}