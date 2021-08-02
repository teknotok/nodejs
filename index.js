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

//require helmet
const helmet = require('helmet');
app.use(helmet());

//custom middleware // the call in development env
const logging = require('./logger/logging');
// **Morgan** HTTP request logger middleware for node.js // npm i morgan // its so important to dev the program and test the speed for the requset
const morgan = require('morgan');
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    app.use(logging.log1);
    app.use(logging.log2);
}
// import employees from the 'the dir'
const employees = require('./employees/employees.js');
app.use('/api/employees',employees);
