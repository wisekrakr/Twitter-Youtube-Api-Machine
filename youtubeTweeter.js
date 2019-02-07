
var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var search = require('youtube-search');
 
var opts = require('./ytconfig'); //{maxResult: ... , key: ...}

setInterval(automatedTweet, 1000*60*60);
//automatedTweet();

function automatedTweet(){		
	
	search('search query', opts, function(err, results) {
		
		var randomVideo = results[Math.floor(Math.random() * results.length)];
		var randomVideoLink = randomVideo.link;	
		var videoDescription = randomVideo.description;		
		var videoTags = randomVideo.tags;	

		console.log(randomVideo);
		
		var postParams = { 
		  status: "wisehakr_bot says: " + videoDescription + randomVideoLink
		}

		T.post('statuses/update', postParams, setPostData) ;

		function setPostData(err, data, response){
			data = randomVideoLink;

			if (err) {
				console.log("Something went wrong: " + err);
			}else{			
				console.log("It worked: " );
			}	  
			console.log(postParams);
		}

	});			
}
