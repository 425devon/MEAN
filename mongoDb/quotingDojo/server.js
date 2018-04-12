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
// Require mongoose
var mongoose = require('mongoose');
// Connect mongoose to MongoDB
mongoose.connect('mongodb://localhost/quotes_db');
//create mongoose schema
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    date: Date
});
//Set schema to models
mongoose.model('Quote', QuoteSchema);
// retireve schema from models
var Quote = mongoose.model('Quote');
// using native promises
mongoose.Promise = global.Promise;
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
// Add User Request 
app.post('/newQuote', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the quote from req.body to the database.
    var date = new Date();
    var quote = new Quote({name: req.body.name, quote: req.body.quote, date: date});
    quote.save(function(err){
        if(err){
            console.log("something went wrong!" + err);
        }else{
            console.log("successfuly added quote!"+ quote)
            res.redirect('/showQuotes');
        }
    })
})
app.get("/showQuotes", function(req, res){
    Quote.find({}, function(err, quotes){
        // This is the method that finds all of the quotes from the database
        // Notice how the first parameter is the options for what to find and the second is the
        // callback function that has an error (if any) and all of the quotes
        // Keep in mind that everything you want to do AFTER you get the quotes from the database must
        // happen inside of this callback for it to be synchronous 
        // Make sure you handle the case when there is an error, as well as the case when there is no error
        if(err){
            console.log("something went wrong retreiving quotes!" + err);
        }else{
            res.render('quotes', {allQuotes: quotes});
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})