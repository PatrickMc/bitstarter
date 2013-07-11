var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	console.info('Got request');
	fs.readFile('./index.html', 'utf-8', function(err,data) {
		if (err) {
			throw err;
		}
		response.send(data);
	});
//	response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
