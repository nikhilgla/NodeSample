const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    //console.log('in the add product page');
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add size</button></form>')
    res.sendFile(path.join(__dirname , '../','views','add-product.html'))
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;