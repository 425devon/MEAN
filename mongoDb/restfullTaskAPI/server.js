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
mongoose.connect('mongodb://localhost/restfulTask');
//create mongoose schema
var date = new Date();
var Task = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    created_at: {type: Date, defualt: Date.now},
    updated_at: {type: Date, defualt: Date.now},
});
//Set schema to models
mongoose.model('Task', Task);
// retireve schema from models
var Task = mongoose.model('Task');
// using native promises
mongoose.Promise = global.Promise;

app.get("/tasks", function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log("there was an error");
            res.json({message: "Error"});
        }else{
            console.log("success!");
            res.json({message: "Success", data: tasks});
        }
    })
})

app.get("/tasks/:id", function(req,res){
    Task.find({_id: req.params.id}, function(err, task){
        if(err){
            console.log("there was an error");
            res.json({message: "Error", error: err});
        }else{
            console.log("success!");
            res.json({message: "Success", data: task});
        }
    })
})

app.post("/tasks", function(req, res){
    var date = new Date();
    var task = new Task({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        created_at: date,
        updated_at: date
    });
    task.save(function(err, task){
        if(err){
            console.log("error saving new task");
            res.json({message: "Error",error: err})
        }else{
            console.log("success!");
            res.json({message: "Success", data: task});
        }
    })
})

app.put("/tasks/:id", function(req, res){
    Task.findByIdAndUpdate(req.params.id, req.body, function(err, task){
        if(err){
            console.log("error updating!");
            res.json({message: "error", error: err});
        }else{
            console.log("success!");
            res.json({message: "Success", data: task});
        }
    })
})

app.delete("/tasks/:id", function(req,res){
    Task.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log("error removing!");
            res.json({message: "error", error: err});
        }else{
            console.log("success!");
            res.json({message: "Success"});
        }
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})