const express = require("express");
const path = require("path");
let app = express();

app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
app.get('/', function(req, res) {
 res.render("index");
})

let users = {};
let comments = [];

// Start Node server listening on port 8000.
let server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
   var io = require('socket.io').listen(server);

   io.sockets.on('connection', function (socket) {

    socket.on("new_user", function(data){
        console.log(data);
        users[data.uName] = data.uId;
        io.emit("allMsg", {allMsgs: comments})
    })

    socket.on("new_msg", function(data){
        console.log(data.new_msg);
        comments.push(data.new_msg);
        io.emit("newMsg", {newMsgs: data.new_msg})
    })

  })
   
