var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

searchSpecific(
	params = {q: 'search query', count: 3}	
	);

function searchSpecific(params){
	T.get('search/tweets', params, gotData)

	function gotData(err, data, response){
		console.log(data)
	};
	
}
