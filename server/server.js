require('dotenv').config()
// console.log(process.env)
const db = require('./database/connection.js');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3306;
const app = express();

var count = 0;

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(path.join(__dirname, '/../src/')));
app.use(express.static(path.join(__dirname, '/../node_modules')));
app.use(bodyParser.json());


app.post('/add', function(req, res) {
  console.log(req.body);

  var count = req.body.count;

  var queryStr = `UPDATE voting SET vote = ${count} WHERE votesID = 1;`;

  db.query(queryStr, function(err, results) {
        console.log("ERROR:",err,"RESULTS:",results);
     });

  return req;
})

app.post('/minus', function(req, res) {

  var countMinus = req.body.count;

  console.log(req.body.count);

  var queryStr = `UPDATE voting SET vote = ${countMinus} WHERE votesID = 1;`;

  db.query(queryStr, function(err, results) {
        console.log("ERROR:",err,"RESULTS:",results);
     });

  return req;
})

app.post('/add2', function(req, res) {
  console.log(req.body);
  var count = req.body.count2;

  var queryStr = `UPDATE voting SET vote = ${count} WHERE votesID = 2;`;

  db.query(queryStr, function(err, results) {
        console.log("ERROR:",err,"RESULTS:",results);
     });

  return req;
});

app.post('/minus2', function(req, res) {
  console.log(req.body);

  var countMinus = req.body.count2;

  var queryStr = `UPDATE voting SET vote = ${countMinus} WHERE votesID = 2;`;

  db.query(queryStr, function(err, results) {
        console.log("ERROR:",err,"RESULTS:",results);
     });

  return req;
})

app.listen(port, (err) => {
  if(err) {
    console.log('Error occured : ', err);
  }
  console.log('Server is listening to port : ', port);
})
