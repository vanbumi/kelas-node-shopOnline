var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');

mongoose.connect(config.database);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Conected to database')
});

// Initial
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('viewn engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Home / index
app.get('/', function(req, res){
  res.send("It's work!")
});

// Setup server
var port = 3000;

app.listen(port, function(){
  console.log("Server running on port " + port)
});
