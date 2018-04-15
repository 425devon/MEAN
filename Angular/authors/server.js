const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));
mongoose.connect('mongodb://localhost/authors');

let AuthorSchema = new mongoose.Schema({
    name: { type: String, minlength: [3, 'Name must be atleast 3 characters'] }
})

mongoose.model('Author', AuthorSchema);
let Author = mongoose.model('Author');
mongoose.Promise = global.Promise;


app.get('/authors', (req, res) => {
    console.log("server get route hit")
    Author.find({}, function (err, authors) {
        if (err) {
            console.log("there was an error");
            res.json({
                message: "Error"
            });
        } else {
            console.log("success!");
            res.json({
                message: "Success",
                data: authors
            });
        }
    })
})

app.post("/authors", function (req, res) {
    console.log("server save route hit")
    var author = new Author({
        name: req.body.name
    });
    author.save(function (err, author) {
        if (err) {
            console.log("error saving new author");
            res.json({
                message: "Error",
                error: err
            })
        } else {
            console.log("success!");
            res.json({
                message: "Successfully saved author",
                data: author
            });
        }
    })
})

app.get("/authors/:id", function (req, res) {
    Author.find({
        _id: req.params.id
    }, function (err, author) {
        if (err) {
            console.log("there was an error");
            res.json({
                message: "Error",
                error: err
            });
        } else {
            console.log("success!");
            res.json({
                message: "Success",
                data: author
            });
        }
    })
})

app.put("/authors/:id", function (req, res) {
    Author.findByIdAndUpdate(req.params.id, req.body, function (err, author) {
        if (err) {
            console.log("error updating!");
            res.json({
                message: "error",
                error: err
            });
        } else {
            console.log("success!");
            res.json({
                message: "Success",
                data: author
            });
        }
    })
})

app.delete("/authors/:id", function (req, res) {
    Author.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log("error removing!");
            res.json({
                message: "error",
                error: err
            });
        } else {
            console.log("success!");
            res.json({
                message: "Success"
            });
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

app.listen(8000, function () {
    console.log("listening on port 8000");
})