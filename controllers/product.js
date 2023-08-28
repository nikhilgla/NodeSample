const path = require('path');

exports.getShop = (req, res, next) => {
    // console.log('in the middlewaresss');
    // var data = fs.readFileSync('message.txt');
    // console.log(data.toString());
    // res.send(`<h1>hello</h1><h2>${data.toString()}</h2><form  onsubmit="document.getElementById('userId').value = localStorage.getItem('username')" action="/" method="POST"><input type="text" name="info" id="info"><input type="hidden" name="username" id="userId"><button type="submit">Add</button></form>`)
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
};

exports.postShop = (req, res, next) => {
    console.log(req.body);
    fs.appendFileSync('message.txt', req.body.username + ":" + req.body.info + " ")
    res.redirect('/');
};

exports.getAddProducts = (req,res,next)=>{
    //console.log('in the add product page');
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add size</button></form>')
    res.sendFile(path.join(__dirname , '../','views','add-product.html'))
};

exports.postAddProducts = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
};