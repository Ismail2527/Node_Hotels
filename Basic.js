// // function add(a,b){
// //     return a+b;
// // }


// // var add = function(a,b){
// //     return a+b
// // }

// // var add = (a,b) =>{return a+b;}

// var add = (a,b) => a+b;
// var result = add(5,2);
// console.log(result);
// (function(){
//     console.log("Hey Dear! This is Ismail");
// })();



// function callback(){
//     console.log("Hey This is Ismail");
// }

// const add = function(a,b,callback){
//     var res = a+b;
//     console.log("Result--",+res);
//     callback();
// }
// add(4,7,()=>console.log("This Add Completed"));
// var fs = require('fs');
// var os = require('os');


// var user = os.userInfo();
// console.log(user);

// fs.appendFile('chek.txt','Hi this is Ismai'+user.username+'!\n',()=>{
//     console.log("This is inside the FS");
// })
// console.log(fs);
// console.log(os);
// var note = require('./note.js');
// var _ = require('lodash');
// console.log('Server file is available');
// var arr = ["Ismail","Ismail",3,3,5,1,6,3,3,3,3,8,7,8,'name','age','2'];

// var age = note.age;
// var addnumber = note.addnumber(age,18);
// console.log(age)
// console.log(addnumber)
// console.log(_.isString("ismail"))
// console.log(_.isString(43))
// console.log(_.uniq(arr));


// const jsonString = '{"name":"Ismail","Age":24,"Address":"Jehanabad"}';
// const jsonobject = JSON.parse(jsonString);
// console.log(jsonobject.name);
// console.log(jsonobject.Age);
// console.log(jsonobject.Address);

const express = require('express');

const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World:::::::::::------>This is Ismail Server')
// })
// app.get('/Here', function (req, res) {
//   res.send('This is Ismail Resturent --> chikens')
// })
// app.get('/idle', function (req, res) {
//     var coustome_idle ={
//         name:"rava idli",
//         size:"10 cm diameter",
//         is_samber:false,
//         Aamkucha:true
//     }
//   res.send(coustome_idle.name);
// })
// app.post('/items',(req,res)=>{
//   console.log("Data is Saved");
// })
app.listen(3000,()=>{
    console.log("This server in running on 3000 localhost")
})
