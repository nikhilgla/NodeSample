const path =require('path');

exports.getContact = (req,res,next)=>{
    //console.log('in the add product page');
    // res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`userId`).value)" action="/login" method="POST"><input type="text" name="username" id="userId"><button type="submit">Add</button></form>')
    res.sendFile(path.join(__dirname , '../','views','contact-us.html'))
};

exports.postContact = (req,res,next)=>{
    console.log(req.body.username , "ok");
    res.redirect('/');
};