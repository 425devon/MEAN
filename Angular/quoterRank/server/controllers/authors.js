const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    all_authors: (req, res) => {
        Author.find({}, (err, authors) => {
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
    },
    new_author: function (req, res) {
        let author = new Author({
            name: req.body.name
        });
        author.save((err, author) => {
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
    },
    find_author: (req, res) => {
        Author.find({
            _id: req.params.id
        }, (err, author) => {
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
    },
    edit_author: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, author) => {
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
    },
    delete_author: (req, res) => {
        Author.findByIdAndRemove(req.params.id, (err) => {
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
    },
    add_quote: (req, res) => {
        if(req.body.desc.length < 3){
            res.json({
                message: "error",
                data: "quote must be atleast 3 characters long!"
            })
        }else{
            Author.findByIdAndUpdate(req.params.id, {"$push": {"quotes":req.body}}, (err, author) => {
                if (err) {
                    console.log("error adding quote!");
                    res.json({
                        message: "error",
                        error: err
                    });
                } else {
                    console.log("success adding quote!");
                    res.json({
                        message: "Success",
                        data: author
                    });
                }
            })
        }
    }
}