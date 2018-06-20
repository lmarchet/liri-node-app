// read and set any environment variables with the dotenv package
require("dotenv").config(); 

// Core node package for reading and writing files
var fs = require("fs");

// Grab the request package...
var request = require("request");

var Twitter = require('twitter'); //mpm module to access twitter API
var Spotify = require('spotify-web-api-node'); //npm module to access spotify API
var Keys = require('./keys.js'); //keys.js file stores credentials to authentication

/* console.log for testing purpose only
console.log(Keys.twitter); 
console.log(Keys.spotify); 
*/

// PSEUDOCODE: 
/* include process.argv[2] method to retrieve which command to perform based on user input: 1- my-tweets, 2-spotify-this-song, 3-movie-this or 4-do-what-it-says from the node command line 

*/

//import the `keys.js` file and store it in a variable
var spotify = new Spotify(Keys.spotify);
var client = new Twitter(Keys.twitter);

// Twiiter code from twitter npm
var params = {screen_name: 'Leonard59288816'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  
    // if statement to check if twitter returns object or error message.
    // Then, shows either up to 20 of my personal tweets or error messsage with error code passed by twitter

    if (!error) {
        var myTweets = []; //empty array to hold my tweets
       
        // push tweets to myTwetts array
        for (var i = 0; i < tweets.length; i++) {
          myTweets.push({
              'tweet created at: ' : tweets[i].created_at,
              'tweet: ' : tweets[i].text,
          });
        }
        console.log(myTweets);
       // writeToLog(myTweets); for future development. Write the error messages into a file...
    } else {
        console.log(myTweets);
        console.log('The following error message is provided by twitter: ' + JSON.stringify(error));
    }

    // the code below is an option to the if statement above. However, the code below shows the twetter entire object which is cumbersome 
    // if (!error) {
    //     var twitterOutput = JSON.stringify(tweets, null, 4);
    //     console.log(twitterOutput);
    //  } else {
    //     console.log(error);
    //  }
});

/* PSEUDOCODE:
- Similar code as above to retrieve spotify song information based on command line input by the user (song name) for the command line: `node liri.js spotify-this-song '<song name here>
- console.log results:
    * Artist(s)     
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
    * If no song is provided then your program will default to "The Sign" by Ace of Base.

- Similar code as above to retrieve movie information based on command lin input bye the user (movie title) for the command line: node liri.js movie-this '<movie name here>'
- console.log results:
    * Title of the movie
    * Year the movie came out
    * IMDB Rating of the movie
    * Rotten Tomatoes Rating of the movie
    * Country where the movie was produced
    * Language of the movie
    * Plot of the movie
    * Actors in the movie

- Similar code as above to retrieve content from random.txt file to call one of liri's commands. 
- It should run spotify-this-song for "I Want it That Way" for the command line: 'node liri.js do-what-it-says'

- Use fs to write/append each command ran into the log.txt file 

*/