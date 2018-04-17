const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookAPI');
app.use(bp.json());
app.use(express.static(__dirname + '/public/dist'));

let BookSchema = mongoose.Schema({
    title: { type: String, required: true, minlength: 2},
    published: { type: Date, required: true}
})

let AuthorSchema = mongoose.Schema({
    first_name: { type: String, required: true, minlength: 2},
    last_name: { type: String, required: true, minlength: 2},
    country: { type: String, required: true, minlength: 3},
    birth: { type: Date, required: false },
    books: [BookSchema]
})
mongoose.model('Book', BookSchema);
mongoose.model('Author', AuthorSchema );
let Author = mongoose.model('Author');
let Book = mongoose.model('Book');

app.get('/authors', (req, res)=>{
    Author.find((err, authors)=>{
        if(err){
            res.json({
                message: "error",
                error: err
            })
        }else{
            res.json({
                message: "success",
                data: authors
            })
        }
    })
})
app.post('/authors', (req, res)=>{
    if(req.body.birth){
        let date = new Date(req.body.birth);
        let now = new Date();
        if(date >= now){
                res.json({
                message: "error",
                error: "Birth Date must be in the past"
            });
        }
    }else{
        let newAuth = new Author({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            country: req.body.country,
            birth: req.body.birth,
        })

        newAuth.save(function(err, author){
            if(err){
                res.json({
                    message: "error",
                    error: err
                })
            }else{
                res.json({
                    message: "Success",
                    data: author
                });
            }
        });
    }
})

app.get('/authors/:id', (req, res)=>{
    Author.findById(req.params.id, (err, author)=>{
        if(err){
            res.json({
                message: "error",
                error: err
            })
        }else{
            res.json({
                message: "success",
                data: author
            })
        }
    })
})

app.post('/authors/:id/books', (req, res)=>{
    if(req.body.published){
        let date = new Date(req.body.published);
        let now = new Date();
        if(date >= now){
                res.json({
                message: "error",
                error: "published Date must be in the past"
            });
        }
    }
    let nb = new Book({
        title: req.body.title,
        published: req.body.published
    })
    Author.findByIdAndUpdate(req.params.id, {$push:{books: nb}}, {new: true}, (err, author)=>{
        if(err){
            res.json({
                message: "error",
                error: err
            })
        }else{
            res.json({
                message: "success",
                data: author
            })
        }
    })
})
app.put("/authors/:id", function (req, res) {
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true},function (err, author) {
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
app.delete('/authors/:id/:bid', (req, res)=>{
    Author.findById(req.params.id, (err, author)=>{
        author.books.id(req.params.bid).remove();
        author.save()
        console.log(author);
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

app.listen(8000, ()=>{
    console.log("listening on port 8000");
})




