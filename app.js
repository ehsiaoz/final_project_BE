var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var businesses = require('./routes/businesses');
var categories = require('./routes/categories');
var offers = require('./routes/offers');
var config = require('./config/database');
var Promise = require("bluebird");

mongoose.Promise = Promise;


var app = express();

//Connect to MongoDB
mongoose.connect(config.db.development);
// mongoose.connect('mongodb://localhost:27017/bizfinder');
//On successful database connection
mongoose.connection.on('connected', () => {
  console.log("Connected to database: " + config.db.development);
  // console.log("Connected!");
});
//On database connection Error
mongoose.connection.on('error', (err) => {
  console.log("Database error: " + err);
});

//8888888888888888888888888888888888
// app.configure(function () {
//   //...
//   // set the 'dbUrl' to the mongodb url that corresponds to the
//   // environment we are in
//   app.set('dbUrl', config.db[app.settings.env]);
//   // connect mongoose to the mongo dbUrl
//   mongoose.connect(app.get('dbUrl'));
//   //...
// });
//http://www.scotchmedia.com/tutorials/express/authentication/1/05
//888888888888888888888888888888888888888888888888

//Configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', businesses);
app.use('/api', categories);
app.use('/api', offers)

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});

// module.exports = app;s
