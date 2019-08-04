require("dotenv").config();
var fs = require("fs"); //file system that is aready built.
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var axios = require("axios");
// var request = require("request");

console.log(keys.spotify);
var spotify = new Spotify(keys.spotify);
// user input
var command = process.argv[2];
// console.log("this is command", + command);
var input = process.argv[3];
// console.log("this is input", + input);
// omdb
var movieThis = function(input) {
  var url =
    "http://www.omdbapi.com/?t=" +
    input +
    "&y=&plot=full&tomatoes=true&apikey=trilogy";
  axios.get(url).then(function(response) {
    console.log("title", response.data.Title);
    console.log("year", response.data.Year);
    //   console.log(response.data.imdbRating);
    console.log("country", response.data.Country);
    console.log("actor", response.data.Actors);
    console.log("plot", response.data.Plot);

    // console.log("testing");
  });
};

var concertThis = function(input) {
  console.log("looking for concert");
  var URL =
    "https://rest.bandsintown.com/artists/" +
    input +
    "/events?app_id=codingbootcamp";
  axios.get(URL).then(function(response) {
    // console.log(response.data)
    for (var i = 0; i < response.data.length; i++) {
      console.log("Name of vanue", response.data[i].venue.name);
      console.log("vanue location", response.data[i].venue.city);
      console.log("vanue", response.data[i].venue.region);
    }
  });
};

switch (command) {
  case "spotify-this":
    console.log("testing");
    spotifyThis(input);
    break;

  case "movie-this":
    // omdb function
    movieThis(input);
    // console,log("movie testing");
    break;

  case "concert-this":
    // bands in town function
    concertThis(input);
    break;
}

// spotify
function spotifyThis(input) {
  spotify.search({ type: "track", query: input }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    // console.log(data.tracks.items);

    for (var i = 0; i < data.tracks.items.length; i++) {
      //   console.log(data.tracks.items[i]);
      var artists = [];
      for (var J = 0; J < data.tracks.items[J].artists.length; J++) {
        artists.push(data.tracks.items[i].artists[J].name);
      }
      console.log("name of song" + data.tracks.items[i].name);
      console.log("preview of song" + data.tracks.items[i].preview_url);
      console.log("artist" + artists);
      console.log("album" + data.tracks.items[i].album.name);
    }
  });
}

function movieThis(input) {
  // Default to Mr. Nobody
  if (input.length === 0) {
    input = "Mr. Nobody";
  }
  axios
    .get("http://www.omdbapi.com/?t=" + input + "&plot=short&apikey=trilogy")
    .then(function(response) {
      var rotten = response.data.Ratings[1];
      if (rotten === undefined) {
        rotten = "Not available";
      } else {
        rotten = response.data.Ratings[1].value;
      }
      console.log("  ");
      console.log(
        "movie info *****************************************" +
          response.data.Title
      );
      console.log("  ");
      // for (var i = 0; i < response.data.length; i++) {
      console.log("title" + response.data.Title);
      console.log("year" + response.data.Year);
      console.log("IMDB Rating" + response.data.Rated);
      console.log("Rotten tomatoes rating" + rotten);
      console.log("counttry produced" + response.data.Country);
      console.log("language" + response.data.Language);
      console.log("Plot" + response.data.Plot);
      console.log("Actors" + response.data.Actors);
    });
}
