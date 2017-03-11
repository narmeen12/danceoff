var mysql      = require('mysql');
 var config = mysql.createConnection({
  host     : 'fedora-nyc1.laulabs.net',
   user     : 'narmin',
   password : 'narmin123',
   database : 'events_manager',
   port: 8080
 });
 
 config.connect();
 
 module.exports = config; 
