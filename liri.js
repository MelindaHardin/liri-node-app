//require("dotenv").config(); 
console.log("is this working?");


//Add the code required to import the keys.js file and store it in a variable.  
var keys = require("./keys.js");				
var twitter = require("twitter");				
var request = require("request");				
var spotify = require("spotify");				


var client = new Twitter(keys.twitter);

var params = {
    screen_name: 'MelindaYWHardin',
    count:10
};

client.get('#######', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets);  // The favorites. (???)
    console.log(response);  // Raw response object. (???)
  });
