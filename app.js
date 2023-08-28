const express = require('express');
const bodyparser = require('body-parser');
const path = require('path')

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact') 

const errorController = require('./controllers/error')

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname , 'public')))

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use(errorController.get404)

app.listen(3000);