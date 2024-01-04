console.log("code");
require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req,res)=>{
    res.send("Hi everyone");
});

app.listen(process.env.PORT, ()=>{
    console.log('running on ${port}');
})