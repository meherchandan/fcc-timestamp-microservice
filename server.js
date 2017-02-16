// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var dateconverter = require('./dateconverter');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

//Route to provide current Date in UTC and UNIX timestamp format
app.get("/api/timestamp",dateconverter.defaultDate);

//Route to convert provided date to UTC and UNIX timestamp
app.get("/api/timestamp/:timestamp",dateconverter.convertDate);

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});