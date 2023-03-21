const express = require('express');
const cors = require('cors');
const cnf = require('dotenv');
const _ = require('lodash');
const app = express();
cnf.config();
const port = _.get(process.env,'PORT',3000);
app.use(cors());
app.use('/',require('./routes/api')());
app.listen(port,()=>{
    console.log(`Your app running on port ${port}.`);
});