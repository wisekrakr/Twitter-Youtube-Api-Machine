# Twitter-Youtube-Api-Machine
A Voltron that uses both twitter and youtube api's, to search for videos and tweet about them.

Use youtubeTweeter.js to do the following.

How I did it:

On https://www.npmjs.com/ got: twit api and youtube-search api

Via node.js and cmd-prompt init these api's (npm install <name> -s).
Create a new .js file in any text editor.  
In this file I create new variables:
  
    var Twit = require('twit'); // get twit api
    var config = require('./config'); // apply for your own keys
    var T = new Twit(config); 
    var search = require('youtube-search'); //get youtube api
    var opts = require('./ytconfig'); // {maxResult: ... , google key: ...}

First we search for the right videos:
  
    search('searchterm', opts, function(err, results) {

      //within these brackets I search for what I want from that particular video (link, description, title)
      
      var randomVideo = results[Math.floor(Math.random() * results.length)];
		  var randomVideoLink = randomVideo.link;	
		  var videoDescription = randomVideo.description;		

      //I create a function to get that info and to place a within a tweet later on.
      
      function setPostData(err, data, response){}

      //and finally: 

      T.post('statuses/update', postParams, setPostData) // postParams = text to be posted, setPostData = link of video.
}

NEXT STEPS: Find a way to introduce tags of videos to tweet.
            Automated responses to tweets (stream.)
	    
I also included some simple .js files where you can see the steps I took to get to this Voltron. 
