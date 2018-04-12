const express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginregDB');
mongoose.Promise = global.Promise;
const bcryptAsPromised = require("bcrypt-as-promised")

app.get("/", function(req,res){
    res.render('index');
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})