// Require the Express Module
const express = require('express');
// Create an Express App
const app = express();
// Require body-parser (to receive post data from clients)
//define static route to angular dist folder
app.use(express.static( __dirname + '/public/dist' ));
// Require path
var path = require('path');

app.listen(8000, ()=>{
    console.log("listening on port 8000");
});
