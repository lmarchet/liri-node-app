// read and set any environment variables with the dotenv package
require("dotenv").config(); 

// require('./my_tweets.js') FOR FEATURE DEVELOPMENT

// Core node package for reading and writing files
var fs = require("fs");

// Grab the request package...
var request = require("request");

var Twitter = require('twitter'); //npm module to access twitter API
var Spotify = require('spotify-web-api-node'); //npm module to access spotify API
var Keys = require('./keys.js'); //keys.js file stores credentials to authentication

// console.log for testing purpose only
// console.log(Keys.twitter); 
// console.log(Keys.spotify); 

//import the `keys.js` file and store it in a variable
var spotify = new Spotify(Keys.spotify);
var client = new Twitter(Keys.twitter);

// retrieve user's request and save into variables
var userCommand = process.argv[2];
var userSongMovie = process.argv[3];

// console.log for testing purpose only
console.log('user requested liri to run: ' + userCommand);
console.log('user requested either song or movie: ' + userSongMovie);

switch (userCommand) {

    case 'my-tweets':
        console.log('Oh eh.... twitter works man!!!');

        my_tweets(); // function to retrieve user's latest 20 tweets
        break;

    case 'spotify-this-song' :
        console.log('Feature under development...come back again later');
        console.log('Oh eh.... switch-case statement works man for SONGS !!!');
        
        spotify_songs(); // function to retrive user's requested song
        break;
       
    case 'movie-this' :
        console.log('Feature under development...come back again later');
        console.log('Oh eh.... switch-case statement works man for MOVIES !!!');
       
        movie_this(); // function to retrieve user's requested movie information
        break;
        
    case 'do-what-it-says' :
        console.log('Feature under development...come back again later');
        console.log('Oh eh.... switch-case statement works man for DO WHAT IT SAYS reading from random.txt file !!!');
        
        read_text_file() // function that reads from text file and uses spotify API to retrieve a song in random.txt
        break;

    default:    
    console.log('Sorry mate ... I cannot help you with that. Please use: type node liri my-tweets to get up to your latest 20 tweets');

};

        
/* PSEUDOCODE:

- Similar code as above to retrieve content from random.txt file to call one of liri's commands. 
- It should run spotify-this-song for "I Want it That Way" for the command line: 'node liri.js do-what-it-says'

- Use fs to write/append each command ran into the log.txt file 

*/



/**********************   FUNCTIONS    ***************************** */

// function to retrieve latest 20 tweets using twitter API
function my_tweets() {

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

};

// function to retrieve songs leveraging OMBD API
function spotify_songs() {

    /* PSEUDOCODE:
        - Similar code as above to retrieve spotify song information based on command line input by the user (song name) for the command line: `node liri.js spotify-this-song '<song name here>
        - console.log results:
            * Artist(s)     
            * The song's name
            * A preview link of the song from Spotify
            * The album that the song is from
            * If no song is provided then your program will default to "The Sign" by Ace of Base.
    */

};

// function to retrieve user's requested movie information keveraging OMBD API
function movie_this() {

    /* PSEUDOCODE:
            - Similar code as above to retrieve movie information based on command line input by the user (movie title) for the command line: node liri.js movie-this '<movie name here>'
            - console.log results:
                * Title of the movie
                * Year the movie came out
                * OMDB Rating of the movie
                * Rotten Tomatoes Rating of the movie
                * Country where the movie was produced
                * Language of the movie
                * Plot of the movie
                * Actors in the movie
    */

};

// function that reads from text file and uses spotify API to retrieve a song in random.txt
function read_text_file() {

    /* PSEUDOCODE:
            - Similar code as above to retrieve information based on command line: `node liri.js do-what-it-says`
            - Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        
            - It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
    */


};

