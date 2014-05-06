var express = require('express');
var app = express();

// app.get('/', function(req, res) {
// 	res.send('<h1>Hello Boulder</h1>');
// });

app.get('/', function(req, res) {
	var message = function(){
		res.send("oh hi there");
	};
	setTimeout (message, 5000);
});

var server = app.listen(3060, function() {
	console.log('Express server listening on port ' + server.address().port);
});
