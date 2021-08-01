const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());
const port = 2000;

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
const employees = [
    {empID: 1, fullname: 'Muhammed Essa', salary:3000},
    {empID: 2, fullname: 'Ahmad Sami', salary:3000},
    {empID: 3, fullname: 'Salih Cuma', salary:2500},
    {empID: 4, fullname: 'Selim Cadoa', salary:16000},
    {empID: 5, fullname: 'Şam Cadoa', salary:3000},
    {empID: 6, fullname: 'Soso Benem Aşkım', salary:'30,000'},
]

/* "See all employees" */
app.get('/employees',(req,res) => {
    res.send(employees)
} )

/* "Add a employees" */
app.post('/api/employees/add', (req,res) => {
    const schema = Joi.object({
        empID: Joi.number(),
        fullname: Joi.string(),
        salary: Joi.number(),
    });

    const value = {
        empID: req.body.empID,
        fullname: req.body.fullname,
        salary: req.body.salary
    };

    const result = schema.validate(value);
    if(!result.error){
        employees.push(result);
        res.send('its ok')
    }
    else{
        res.send('there is a problem with Joi!' + result.error)
    }

    
});

/* "Get a employee by id" */
app.get('/employees/:id',(req,res) => {
const findEmployess = employees.find(element => element.empID == req.params.id);
if(findEmployess){
    res.send(findEmployess.fullname);
}
else{
    res.send('thers is no answer');
}
}); 

/* "Get and send res of an array" */
app.get('/api/array',(req,res) => {
    res.send([2323,43,34345,45,,6,7,6433454])
} )

/* "Get and send res of an array by Id" */
app.get('/api/array/:id',(req,res) => {
    res.send(req.params.id);
    
});

app.put('/employees/:id',(req,res) => {
const result = employees.find(item => item.empID == req.params.id);
if (!result){
    return res.send('The in no result for this item');
}
else {
    const schema = Joi.object({
        fullname: Joi.string(),
        salary: Joi.number(),
    });

    const value = {
        fullname: req.body.fullname,
        salary: req.body.salary
    };

    const itsOk = schema.validate(value);
    if(itsOk.error){
        return res.send('There is a problem with joi!' + ' ' + itsOk.error);
    }
    else{
        result.fullname = req.body.fullname;
        result.salary = req.body.salary;
        return res.send(result);
    }
}
});
/* "Delete by Id and send res of an array by Id" */

app.delete('/employees/:id', (req,res)=> {
ItemById = employees.find(item => item.empID == req.params.id);
if(ItemById){
    ItemByIndex = employees.indexOf(ItemById);
    employees.splice(ItemByIndex,1);
    res.send(ItemById.fullname + ' is deleted')
}
res.send('not found');

});