const express = require('express');
const localForage =require('localforage');
const fs = require('fs');

const router = express.Router();
var abc;
router.get('/login',(req,res,next)=>{
    //console.log('in the add product page');
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`userId`).value)" action="/login" method="POST"><input type="text" name="username" id="userId"><button type="submit">Add</button></form>')
});

router.post('/login',(req,res,next)=>{
    console.log(req.body.username , "ok");
    res.redirect('/');
});

module.exports = router;
//module.exports.someText = abc;