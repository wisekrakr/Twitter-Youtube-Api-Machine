
var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var searchParams = { 
	q: 'search query', 
	count: 5
}

T.get('search/tweets', searchParams, gotSearchData);

function gotSearchData(err, data, response) {
	console.log("Initiating Twitter Bot: Posting Videos");
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}  	
}
