const express = require('express');
const bp = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/proManager');

let ProductSchema = new mongoose.Schema({
    title: {type: String, min: [4, "Title must be atleast 4 characters"]},
    price: {type: Number, required: [true, "a price is required for this item"]},
    url: {type: String, required: false}
})
mongoose.model('Product', ProductSchema);
let Product = mongoose.model('Product');

app.use(express.static(__dirname + '/public/dist'));
app.use(bp.json());

app.get('/products', (req, res)=>{
    Product.find({}, (err, products)=>{
        if(err){
            res.json({
                message: "Error",
                Error: err
            })
        }else{
            res.json({
                message: "Success",
                data: products
            })
        }
    })
})

app.post('/products', (req, res)=>{
    let product = new Product({
        title: req.body.title,
        price: req.body.price,
        url: req.body.url
    })
    product.save((err, product)=>{
        if(err){
            res.json({
                message: "Error",
                Error: err
            })
        }else{
            res.json({
                message: "Success",
                data: product
            })
        }
    })
})
app.get('/products/:id', (req, res)=>{
    Product.find({
        _id: req.params.id
    }, (err, product) => {
        if (err) {
            console.log("there was an error");
            res.json({
                message: "Error",
                Error: err
            });
        } else {
            console.log("success!");
            res.json({
                message: "Success",
                data: product
            });
        }
    })
})
app.put('/products/:id', (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, product) => {
        if (err) {
            console.log("error updating!");
            res.json({
                message: "error",
                Error: err
            });
        } else {
            console.log("success!");
            res.json({
                message: "Success",
                data: product
            });
        }
    })
})
app.delete('/products/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err) => {
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