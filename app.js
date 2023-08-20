const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    //console.log('in the add product page');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button><input type="text" name="size"><button type="submit">Add size</button></form>')
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    // console.log('in the middlewaresss');
    res.send('<h1> hello to node js </h1>')
});
//const routes = require('./routes');

app.listen(3000);