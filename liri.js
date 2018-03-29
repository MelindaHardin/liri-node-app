    //console.log("is this working?");
var fs = require('fs');
require("dotenv").config(); 

   //Add the code required to import the keys.js file and store it in a variable.  
var keys = require("./keys.js");

    // twitter npm
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

    // spotify npm
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var request = require("request"); //<--to grab data from the OMDB API		
				
var command = process.argv[2];
var search = process.argv[3];


switch(command){
    case 'my-tweets':
        getTweets();
    break;

    case 'spotify-this-song':
        spotify();
    break;

    case 'movie-this':
        movies();
    break;

    case 'do-what-it-says':
        random();
    break;
}

//gets 10 Tweets function
function getTweets(){

    var params = {
        screen_name: 'MelindaYWHardin',
        count:10  //how many tweets I want back
    }
    
    //when the data is returned from the API
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        
          console.log(tweets[0].text);
        }
    });

}