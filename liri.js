// read and set any environment variables with the dotenv package
require("dotenv").config(); 

var Twitter = require('twitter'); //mpm module to access twitter API
var Spotify = require('spotify-web-api-node'); //npm module to access spotify API
var Keys = require('./keys.js'); //keys.js file stores credentials to authentication

// console.log(Keys.twitter);
// console.log(Keys.spotify);

//import the `keys.js` file and store it in a variable
var spotify = new Spotify(Keys.spotify);
var client = new Twitter(Keys.twitter);

// Twiiter code from twitter npm
var params = {screen_name: 'Leonard59288816', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    var twitterOutput = JSON.stringify(tweets, null, 4);
    console.log(twitterOutput);
  }
});
