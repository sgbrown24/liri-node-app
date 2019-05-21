// require("dotenv").config();

var fs  =  require("fs"); //file system that is aready built.
 var spotify = require('node-spotify-api');
 var spotify = new spotify(keys.spotify);
var keys = require("./keys.js");
var axios = require('axios');
// var request = require("request");
var moment = require("moment");

// user input
var command = process.argv[2];
var input = process.argv[3];


// omdb
var movieThis = function (input) {
    var url = "http://www.omdbapi.com/?t=" + input + "&y=&plot=full&tomatoes=true&apikey=trilogy"
     axios.get(url).then(function(response){
      console.log("title", response.data.Title);
      console.log("year", response.data.Year);
      console.log("rating", response.data.imdbRating);
      console.log("country", response.data.Country);
      console.log("actor", response.data.Actors);
      console.log("plot", response.data.Plot);

    // console.log("testing");
});
}

// concert function
var concertThis = function(input){
    console.log("looking for concert");
    var URL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
    axios.get(URL).then(function(response){
        // console.log(response.data)
        for(var i = 0; i < response.data.length; i++){
            console.log("Name of vanue" , response.data[i].venue.name)
            console.log("vanue location" , response.data[i].venue.city)
            console.log("vanue" , response.data[i].venue.region)


        }
    })
}

// spotify
var spotifyThis = function() {
   
}




// switch commands
    switch(command) {
        case "spotify-this":
      spotifyThis(input)
        break;

    case "movie-this":
    movieThis(input)
    break

    case "concert-this":
    concertThis(input)
    break;

    case "do-what-it-says":
    doThis();
    break;
    }




































