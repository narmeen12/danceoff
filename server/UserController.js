 var db = require('database/config.js');
 
 module.exports = {

 	badvote:{

 	 post: function (params, callback) {
       // create a user
       console.log("WHAT THE PARAMS THOOOOOO: ", params);
 
       var queryStr = "UPDATE votes SET badVote ="+ '' +"WHERE votesID = 1;";
       db.query(queryStr, params, function(err, results) {
        callback(err, results);
     });
   }
 }

 	vote: {
     post: function (params, callback) {
       // create a user
       console.log("WHAT THE PARAMS THOOOOOO: ", params);
 
       var queryStr = 'insert into vote(username) values (?)';
       db.query(queryStr, params, function(err, results) {
        callback(err, results);
     });
   }
 		
 	}
 
 }; 





