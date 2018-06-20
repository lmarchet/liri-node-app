// read and set any environment variables with the dotenv package
require("dotenv").config(); 

var Twitter = require('twitter'); //mpm module to access twitter API
var Spotify = require('spotify-web-api-node'); //npm module to access spotify API
var Keys = require('./keys.js'); //keys.js file stores credentials to authentication

/* console.log for testing purpose only
console.log(Keys.twitter); 
console.log(Keys.spotify); 
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

    // the code below is an option for the if statement above. However, the code below shows the twetter entire object which is cumbersome 
    // if (!error) {
    //     var twitterOutput = JSON.stringify(tweets, null, 4);
    //     console.log(twitterOutput);
    //  } else {
    //     console.log(error);
    //  }

});
