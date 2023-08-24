const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const loginRoutes = require('./routes/login') 

app.use(bodyparser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(loginRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);