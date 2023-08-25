const express = require('express');
// const localForage =require('localforage');
const fs = require('fs');
const path = require('path');

const router = express.Router();
// var abc;
router.get('/contact-us',(req,res,next)=>{
    //console.log('in the add product page');
    // res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`userId`).value)" action="/login" method="POST"><input type="text" name="username" id="userId"><button type="submit">Add</button></form>')
    res.sendFile(path.join(__dirname , '../','views','contact-us.html'))
});

router.post('/contact-us',(req,res,next)=>{
    console.log(req.body.username , "ok");
    res.redirect('/');
});

module.exports = router;
//module.exports.someText = abc;