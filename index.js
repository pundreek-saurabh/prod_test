console.log("code");
require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

const mydata = {
    "author": "Pundreek",
    "license": "ISC",
    "project": "backend"
};

app.get('/', (req,res)=>{
    res.send("Hi everyone");
});

app.get('/data', (req,res)=>{
    res.json(mydata)
});

app.listen(process.env.PORT, ()=>{
    console.log('running on ${port}');
})