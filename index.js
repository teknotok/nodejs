const express = require('express');
const app = express();

app.use(express.json());

const employees = [
    {empID: 1, fullname: 'Muhammed Essa', salary:3000},
    {empID: 2, fullname: 'Ahmad Sami', salary:3000},
    {empID: 3, fullname: 'Salih Cuma', salary:2500},
    {empID: 4, fullname: 'Selim Cadoa', salary:16000},
    {empID: 5, fullname: 'Şam Cadoa', salary:3000},
    {empID: 6, fullname: 'Soso Benem Aşkım', salary:'30,000'},
]

app.get('/employees',(req,res) => {
    res.send(employees)
} )

app.get('/employees/:id',(req,res) => {
const findEmployess = employees.find(element => element.empID == req.params.id);
if(findEmployess){
    res.send(findEmployess.fullname);
}
else{
    res.send('thers is no answer');
}
}); 

app.get('/api/array',(req,res) => {
    res.send([2323,43,34345,45,,6,7,6433454])
} )

app.get('/api/array/:id',(req,res) => {
    res.send(req.params.id);
    
});

app.get('/api/:id/:firstname',(req,res) => {
    res.send(req.params)
});

app.post('/api/employees/add', (req,res) => {
    const employee = {
        empID: req.body.empID,
        fullname: req.body.fullname,
        salary: req.body.salary
    }
    employees.push(employee);
    res.send('its ok')
});

const port = process.env.por || 4000;
app.listen(3000,() => console.log('app working in port ' + port + '....'));