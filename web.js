// var strout = new Buffer(readFileSync('index.html'));
// var buf = new Buffer(strout)

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  var fs = require('fs');
//  var buf = new Buffer(readFileSync('index.html');
  response.send('Hello World from index.html');
//  response.send('Hello World 2!');
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
