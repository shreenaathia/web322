/*********************************************************************************
* WEB322 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: _Shreena Athia_ Student ID: _122585177__ Date: FEB 9th, 2018
*
* Online (Heroku) Link: ________________________________________________________
*
********************************************************************************/ 


var dataService = require('./data-service.js')
var express = require('express');
var app = express();
var path = require('path');

var HTTP_PORT = process.env.PORT || 8080;

dataService.initialize().then(()=>{ 


app.listen(HTTP_PORT, function(){
console.log("Express http server is listening on " + HTTP_PORT)
;});
}).catch(()=>{
    console.log(" error occured");
});

app.use(express.static('public'));

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"));
} );

app.get("/about",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/about.html"));
} );

app.get("/employees",(req, res) => {
    dataService.getAllEmployees()
.then((data) => {
        res.json(data)
    }).catch((err)=> {
        res.send(err)
    })
} );




 app.get("/managers",(req, res) => {
    dataService.getManagers()
    .then((data) => {
            res.json(data)
        }).catch((err)=> {
         res.send(err)
        })
     });


 app.get("/departments",(req, res) => {
     dataService.getDepartments()
.then((data) => {
    res.json(data)
}).catch((err)=> {
    res.send(err)
})
 } );

app.use(function(req, res){
   res.status(404).send("https://medium.com/@CollectUI/404-page-design-inspiration-march-2017-f6d9f7efd054");
} );


