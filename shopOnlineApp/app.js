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
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// set routes index
var pages = require('./routes/pages.js');
app.use('/', pages);

// set routes admin area
var adminPages = require('./routes/admin_pages.js');
app.use('/admin/pages', adminPages);

// Setup server
var port = 3000;

app.listen(port, function(){
  console.log("Server running on port " + port)
});
