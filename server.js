var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dreamdatabase");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(__dirname+"/public"));

server.get ("/", function(req, res){
    res.sendFile("/public/index.html");
});

server.listen(8008,function(){
    console.log("Now listening to the voices in my 8008");
});
