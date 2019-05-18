require("dotenv").config();


var fs  =  require("fs"); //file system that is aready built.
var spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require('axios');
var request = require("request");

var spotify = new spotify(keys.spotify);
// user input
var command = process[2];
console.log("this is command", + command);
var input = process.argv[3];
console.log("this is input", + input);

function liri(command, input) {
    switch(command) {
        case "spotify-this":
        console.log("testing");
        break;

    case "movie-this":
    // omdb function
    omdb(input)
    console,log("movie testing");
    break

    case "concert-this":
    // bands in town function
    console.log("testing concert");
    break;


    }
}

// omdb
function omdb(input) {
    var url = "http://www.omdbapi.com"
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

