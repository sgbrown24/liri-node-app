// require("dotenv").config();

var fs  =  require("fs"); //file system that is aready built.
// var spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require('axios');
// var request = require("request");

// var spotify = new spotify(keys.spotify);
// user input
var command = process.argv[2];
// console.log("this is command", + command);
var input = process.argv[3];
// console.log("this is input", + input);
// omdb
var movieThis = function (input) {
    var url = "http://www.omdbapi.com/?t=" + input + "&y=&plot=full&tomatoes=true&apikey=trilogy"
     axios.get(url).then(function(response){
      console.log("title", response.data.Title);
      console.log("year", response.data.Year);
    //   console.log(response.data.imdbRating);
      console.log("country", response.data.Country);
      console.log("actor", response.data.Actors);
      console.log("plot", response.data.Plot);

    // console.log("testing");
});
}

var concertThis = function(input){
    console.log("looking for concert");
    var URL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
    axios.get(URL).then(function(response){
        // console.log(response.data)
        for(var i = 0; i < response.data.length; i++){
            console.log("vanue" , response.data[i].venue.name)
            console.log("vanue" , response.data[i].venue.city)
            console.log("vanue" , response.data[i].venue.region)


        }
    })
}

    switch(command) {
        case "spotify-this":
        console.log("testing");
        break;

    case "movie-this":
    // omdb function
    movieThis(input)
    // console,log("movie testing");
    break

    case "concert-this":
    // bands in town function
    concertThis(input)
    break;


    }




// spotify
function spotify(input){
    var url = ""
}
































// //wiriting object to a file
// function wFile(wFile) {
//     fs.writeFile('log.json', JSON.stringify(wFile), function(err) {
//         if (err) {
//             console.log(err);
//         }
//     })

// }


// var liri

