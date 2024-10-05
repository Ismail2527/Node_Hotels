const express = require('express');
const PORTT = process.env.PORT || 3000;
const passport = require('./auth');
const app = express();
const db = require("./db");
require('dotenv').config();


const MenuItem = require('./models/MenuItem');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const p = require('./models/Person');
// const locatAuthMiddleware = passport.authenticate('local',{session: false});
app.use(passport.initialize());
// Middleware Functions
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
    next();
}
app.use(logRequest);
// Single route for root path
const localAuthMiddleware = passport.authenticate('local',{session: false});
app.get('/', function(req, res)  {
    res.send("Welcome to our Hotel! Tell me, how can I assist you?");
});

// Import routes
const personRouters = require('./routes/personRoutes');
app.use('/Person', personRouters);

const Menu = require('./routes/menuItem');
const Person = require('./models/Person');
app.use('/Menuitem', Menu);

// Start the server
app.listen(PORTT, () => {
    console.log(`This server is running on port ${PORTT}`);
});
