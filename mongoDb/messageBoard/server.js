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
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/msgboardDB');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
name: { type: String, required: true, minlength: 2},
message: { type: String, required: true }, 
comments: []
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.
var CommentSchema = new mongoose.Schema({
// since this is a reference to a different document, the _ is the naming convention!
_post: {type: Schema.Types.ObjectId, ref: 'Post'},
name: { type: String, required: true, minlength: 2},
comment: { type: String, required: true },
}, {timestamps: true });

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');



app.get("/", function(req,res){
    Post.find({}, function(err, posts){
        if(err){
            console.log("There was an error retreiving posts!")
        }else{
            res.render('index', {allPosts: posts});
        }
    })
})

app.post("/newPost", function(req,res){
    var post = new Post({
        name: req.body.name,
        message: req.body.message
    })
    post.save(function(err){
        if(err){
            console.log("there was an error posting!");
        }else{
            console.log('Post successfully saved!')
            res.redirect('/')
        }
    })
})

app.post("/newComment/:id", function(req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment({
            name: req.body.name,
            comment: req.body.comment
        })
        if(err){
            console.log("something went horribly wrong");
        }else{
        post.comments.push(comment)
        post.save(function(err){
            if (!err) console.log('Success!');
            res.redirect('/');
        })
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})