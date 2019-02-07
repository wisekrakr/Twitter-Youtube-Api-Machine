var search = require('youtube-search');
 
var opts = require('./ytconfig'); //{maxResult: ... , key: ...}

var random = null;

search('wisekrakr', opts, function(err, results) {
	//random = results[Math.floor(Math.random() * results.length)].link;
	console.log(results);   
});

