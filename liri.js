require("dotenv").config(); 

//console.log("is this working?");


//Add the code required to import the keys.js file and store it in a variable.  
var keys = require("./keys.js");	

var twitter = require("twitter");				
var request = require("request"); //<--to grab data from the OMDB API		
var spotify = require("node-spotify-api");				

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//Object that has parameteres (params) in it

function getTweets(){

    var params = {
        screen_name: 'MelindaYWHardin',
        count:10  //how many tweets I want back
    }
    
    //when the data is returned from the API
    client.get('statuses/user_timeline', function(error, tweets, response) {
        
        if(error) throw error;
        console.log(tweets);  // The favorites. (???)
        console.log(response);  // Raw response object. (???)
      });
  

};

