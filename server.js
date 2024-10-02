
const express = require('express');

const app = express();
const db = require("./db");

const MenuItem = require('./models/MenuItem');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("Welcome To my ladies and Gentle Tell me How can i assit you");
})



const personRouters = require('./routes/personRoutes');
app.use('/Person',personRouters);
const Menu = require('./routes/menuItem');
app.use('/Menuitem',Menu);
app.listen(3000,()=>{
    console.log("This server in running on 3000 localhost")
})
//This is my second version
