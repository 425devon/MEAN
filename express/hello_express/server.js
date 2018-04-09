var session = require('express-session');
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
//app.use(express.static(__dirname + "/static")); //serving static html from static direcotry
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

  app.get('/', function(req, res) {
  res.send("<h1>Hello Express</h1>");
  })

  app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

  app.listen(8000, function() {
    console.log("listening on port 8000");
  })