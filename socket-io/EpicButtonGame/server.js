const express = require("express");
const path = require("path");
let app = express();
let count = 0;
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
app.get('/', function(req, res) {
 res.render("index");
})

// Start Node server listening on port 8000.
let server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
   var io = require('socket.io').listen(server);

   io.sockets.on('connection', function (socket) {
       io.emit("count", {curCount: count})
    // //  FULL BROADCAST:
        socket.on("clicked", function(){
            count++
            io.emit("count", {curCount: count})
        })
        socket.on("reset", function(){
            count = 0;
            io.emit("count", {curCount: count})
        })
    })
   
