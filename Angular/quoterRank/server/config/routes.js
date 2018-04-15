const mongoose = require('mongoose');
const author = require('../controllers/authors.js');

module.exports = (app) => {
    app.get('/authors', (req, res) => {
        console.log("server get all route hit")
        author.all_authors(req, res);
    })
    
    app.post("/authors", (req, res) => {
        console.log("server save route hit")
        author.new_author(req, res);
    })
    
    app.get("/authors/:id", (req, res) => {
        console.log("server find author by id route hit");
        author.find_author(req ,res);
    })
    
    app.put("/authors/:id", (req, res) => {
        console.log("server edit author route hit");
        author.edit_author(req,res);
    })
    
    app.delete("/authors/:id", (req, res) => {
        console.log("delete author by id route hit");
        author.delete_author(req, res);
    })
    
    app.put('/authors/quotes/:id', (req, res) => {
        console.log("server add quote route hit");
        author.add_quote(req, res);
    })
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}