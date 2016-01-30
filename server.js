var express = require('express');
var app = express();
var PORT = 3000; //constant

var middleware = require('./middleware.js');

//we log every request made
app.use(middleware.logger);

// Get Request: / is the root url, req is the request and res the response
//app.get('/', function (req, res) {
//    res.send('Hello Express!');
//});

//about
app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('About us');
});

//Expose an entire folder in the server // http://localhost:3000/index.html
app.use(express.static(__dirname +'/public'));

app.listen(PORT, function(){
    console.log('Express server started on port '+PORT+'!');
});