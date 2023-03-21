const express = require('express');
const cnf = require('dotenv');
const _ = require('lodash');
const app = express();
cnf.config();
const port = _.get(process.env,'PORT',3000);
app.listen(port,()=>{
    console.log(`Your app running on port ${port}.`);
});