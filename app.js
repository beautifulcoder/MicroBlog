var http = require('http');
var route = require('./route/route');
var port = process.env.port || 1337;

var app = http.createServer(function requestListener(req, res) {
  route(req, res);
});

app.listen(port);

console.log('Listening on http://localhost:' + port);
