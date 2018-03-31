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
var spotifyKey = new Spotify(keys.spotify);

//grab data from the OMDB API		
var request = require("request"); 

//gets commands for liri
var command = process.argv[2];
var searchInput = process.argv[3];


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
        count:10  //how many tweets I want back  !!!!!!!!NOT WORKING
    }
    
    //when the data is returned from the API
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        for (var i=0; i <tweets.length; i++){
            console.log(tweets[i].text);
            }
         
        }
    });

}


function spotify(){
 //console.log("test spotify");
 
    spotifyKey.search({ type: 'track', query: searchInput, limit: 1 }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }else {
            var searchResults=JSON.stringify(data, null, 2);
            //console.log(data.tracks.items[0]);
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song Title: " + data.tracks.items[0].name);
            console.log("Preview link: " + data.tracks.items[0].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
        }

     
    });
}



function movies(){

    //request to the queryUrl
    request("http://www.omdbapi.com/?t=" + searchInput + "&plot=short&apikey=trilogy", function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

    // Then log the Release Year for the movie
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year released: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country produced: " + JSON.parse(body).Country);
    console.log("Language : " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors : " + JSON.parse(body).Actors);
    
    }
    });
}