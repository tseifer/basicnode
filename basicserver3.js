// tutorial: https://www.guru99.com/download-install-node-js.html

var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello World!');
}).listen(8080);
