var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Dream = require("./models/Dream");


mongoose.connect("mongodb://localhost/dreamdatabase");

server.use(express.static(__dirname+"/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get ("/", function(req, res){
    res.sendFile("/public/index.html");
});

//find dream
server.get("/api/dreams", function(req, res){

});

//make dream
server.post("/api/dreams", function(req, res){
    var dream = new Dream({
      Title: req.body.title,
      Characters: req.body.characters,
      Locations: req.body.locations,
      Events: req.body.events
    });

      dream.save(function(err){
        if (err){
          console.log(err);
        }
          res.json(dream);
      });
});


server.listen(8008,function(){
    console.log("Now listening to the voices in my 8008");
});
