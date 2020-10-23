const http = require('http')

// create a server object. t's actually an EventEmitter
const server = http.createServer((req, res) => {
	// Write a response
	res.write('hello world');
	res.end();
});

server.listen(5000, () => console.log('Server is running...'));

// //also possible
// server.on('connection', (socket) => {
// 	console.log('new connection')
// })





