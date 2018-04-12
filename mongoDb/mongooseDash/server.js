// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooseDB');
var Goose = new mongoose.Schema({
    name: String,
    age: Number,
    food: String
})
mongoose.model('Goose',Goose);
var Goose = mongoose.model('Goose');
mongoose.Promise = global.Promise;
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Goose.find({}, function(err, gooses){
        if(err){
            console.log("error retrieving all gooses");
        }else{
            res.render('index', {gooses:gooses});
        }
    })
})
app.get('/newGoose', function(req, res){
    res.render('newGoose');
})
app.post('/create', function(req, res){
    var goose = new Goose({
        name: req.body.name, 
        age: req.body.age, 
        food: req.body.food
    });

    goose.save(function(err){
        if(err){
            console.log("uh oh! Something went wrong SAVING" + err);
        }else{
            console.log("save successful!" + goose);
            res.redirect("/");
        }
    })
})
app.get("/show/:id", function(req,res){
    Goose.findById(req.params.id,function(err, goose){
        if(err){
            console.log("error recieving goose");
        }else{
            res.render('show', {goose:goose});
        }
    })
})
app.get("/update/:id", function(req,res){
    Goose.findById(req.params.id,function(err, goose){
        if(err){
            console.log("error recieving goose");
        }else{
            res.render('edit', {goose:goose});
        }
    })
})
app.post("/edit/:id", function(req,res){
    Goose.findByIdAndUpdate(req.params.id,{name: req.body.name, age: req.body.age, food: req.body.food}, function(err){
        if(err){
            console.log("something went wrong!");
        }else{
            res.redirect("/");
        }
    })
})
app.get("/destroy/:id", function(req, res){
    Goose.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log("something went wrong removing doc!");
        }else{
            res.redirect("/");
        }
    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
