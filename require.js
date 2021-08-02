
// require Joi
const Joi = require('joi');
//express import
const express = require('express');
const app = express();
app.use(express.json());

//nodemon Port Setting
const port = 2000;
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})

//custom middleware
const logging = require('./logger/logging');
app.use(logging.log1);
app.use(logging.log2);

//require helmet
const helmet = require('helmet');
app.use(helmet());

//HTTP request logger middleware for node.js

