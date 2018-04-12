// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require path
var path = require('path');

var mongoose = require('mongoose');
// Connect mongoose to MongoDB
mongoose.connect('mongodb://localhost/1955_db');
//create mongoose schema
var Person = new mongoose.Schema({name: String});
//Set schema to models
mongoose.model('Person', Person);
// retireve schema from models
var Person = mongoose.model('Person');
// using native promises
mongoose.Promise = global.Promise;

app.get("/", function(req, res){
    Person.find({}, function(err, people){
        if(err){
            console.log("there was an error!");
            res.json({message: "Error", error: err});
        }else{
            console.log("success!")
            res.json({message:"Success", data : people});
        }
    })
})
app.get("/new/:name", function(req, res){
    var person = new Person({
        name: req.params.name
    })
    person.save(function(err){
        if(err){
            console.log("error creating new person");
            res.json({message:"error", error: err});
        }else{
            console.log("sucessfully created " + person);
            res.json({message:"success", data : person});
        }
    })
})
app.get("/remove/:name", function(req,res){
    Person.remove({name: req.params.name}, function(err){
        if(err){
            console.log("there was an error removing "+req.params.name);
            res.json({message: "Error", error: err});
        }else{
            console.log("successfully deleted " + req.params.name);
            res.json({message: "successfully removed! " + req.params.name});
        }
    })
})
app.get("/:name", function(req,res){
    Person.find({name: req.params.name}, function(err, person){
        if(err){
            console.log("error retrieving " + req.params.name);
            res.json({message: "error", error: err});
        }else{
            console.log("Success retrieved " + person);
            res.json({messsage: "Success", data: person});
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})