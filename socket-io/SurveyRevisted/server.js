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

// Start Node server listening on port 8000.
let server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
   var io = require('socket.io').listen(server);

   io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.emit( 'my_emit_event');
    //  BROADCAST:
    socket.broadcast.emit( "my_broadcast_event");
    //  FULL BROADCAST:
    io.emit( "my_full_broadcast_event");
    // all the server socket code goes in here
    socket.on( "posting_form", function (data){
        console.log( 'form was submitted '  + data.form);
        socket.emit( 'server_response', {response: data.form});
        let number = (Math.floor(Math.random()* 1000)+1);
        socket.emit('lucky_number', {number: number})
        console.log("the lucky number is " + number);
    })
  })
