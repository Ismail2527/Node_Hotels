// const mongoose = require('mongoose');

// const mongoURL = 'mongodb://127.0.0.1:27017/';

// mongoose.connect(mongoURL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

// const db = mongoose.connection;

// db.on('connected',() =>{
//     console.log("Connected to MongoDB server");
// });

// db.on('error',(err)=>{
//     console.error("MongoDB connection error:",err);
// });

// db.on('disconnected',()=>{
//     console.log("MongoDB disconnected");
// });

// module.exports = db;
const mongoose = require('mongoose');
require('dotenv').config();


const mongoURL = 'mongodb://127.0.0.1:27017/test';
// const mongoURL = process.env.DB_URL;
// const mongoURL = process.env.DB_URLOCAL;

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',() =>{
    console.log("Connected to MongoDB server");
});

db.on('error',(err)=>{
    console.error("MongoDB connection error:",err);
});

db.on('disconnected',()=>{
    console.log("MongoDB disconnected");
});

module.exports = db;