const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('in the middleware');
    next();
})

app.use((req,res,next)=>{
    console.log('in the another middleware');
    //res.send( { key1: 'value' })
    res.send('<h1> hello to node js </h1>')
})
//const routes = require('./routes');

app.listen(3000)