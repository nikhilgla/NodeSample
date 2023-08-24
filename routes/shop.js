const express = require('express');
const fs = require('fs');

const router = express.Router();

const login = require('./login');

router.get('/',(req,res,next)=>{
    console.log('in the middlewaresss');
    var data = fs.readFileSync('message.txt');
    console.log(data.toString());
    res.send(`<h1>hello</h1><h2>${data.toString()}</h2><form  onsubmit="document.getElementById('userId').value = localStorage.getItem('username')" action="/" method="POST"><input type="text" name="info" id="info"><input type="hidden" name="username" id="userId"><button type="submit">Add</button></form>`)
});

router.post('/', (req,res,next)=>{
    console.log(req.body);
    fs.appendFileSync('message.txt' , req.body.username +":"+ req.body.info+" " )
    res.redirect('/');
})

module.exports = router;