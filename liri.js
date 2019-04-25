require("dotenv").config();
var keys = require("./keys.js");

var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var axios = require("axios");


//variables for user input 
var userInput = process.argv[2];
// variables for user search2
var userQuery = process.argv.slice(3).join(" ");

// Concert-this
function bandsInTown(artist) {
  var artist = userQuery;
  var queryUrl = "https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(function (response) {
    // add a line break when results begin
    console.log("-----------------------------------");
    // console.log(response)
    console.log("Name of the venue: " + response.data[0].venue.name);
    console.log("Venue location: " + response.data[0].venue.city);
    console.log("Date of event: " + moment(response.data[0].datetime).format("MM-DD-YYYY"));
  }
  )
};

// // Spotify this song
function spotifyThis(songSearch) {
  // spotify key
  var spotify = new Spotify(keys.spotify);
  //console.log("song name if not a song name: + songSearch");
  if (!songSearch) {
    songName = "The Sign";
  };

  // Spotify Search
  spotify.search({ type: "track", query: songSearch }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    //line break 
    console.log("-------------------------------------");
    // Artists
    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
    // Song Name
    console.log("Song name: " + data.tracks.items[0].name);
    // link of song
    console.log("Song link: " + data.tracks.items[0].href);
    // The album
    console.log("Album: " + data.tracks.items[0].album.name);
  });
}

// // Movie-this
function getMovie(movie) {
  if (!movie) {
    movie = "Mr. Nobody";
  }
  var movieUrl = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
  //console.log(movieUrl);

  axios.request(movieUrl).then(
    function (response) {
      console.log("------------------------------------");
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes: " + response.data.Rating);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Cast: " + response.data.Actors);
    }
  )
};

// // Do-what-it-says
function doThis() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    else {
      console.log(data);

      var randomData = data.split(",");
      
    }
  });
}

// App Logic
function runLiri() {
  console.log(userInput);
  // app actions based on user's input
  switch (userInput) {
    case "concert-this":
      bandsInTown(userQuery);
      break;

    case "spotify-this-song":
      spotifyThis(userQuery);
      break;

    case "movie-this":
      getMovie(userQuery);
      break;

    case "do-what-it-says":
      doThis();
      break;

    default:
      console.log("invalid command: please enter 'concert-this", "spotify-this-song", "movie-this", "do-what-it-says");
  }
};
runLiri();