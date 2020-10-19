// First server without express

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
	console.log(req.url)
	if (req.url === '/') {
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
			if (err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.end(content)
		});
	}
	else if (req.url === '/about') {
		fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
			if (err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.end(content)
		});
	}
	else if (req.url === '/api/users') {
		const users = [
			{name: 'Bob', age: 40},
			{name: 'Dan', age: 30}
		];
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(JSON.stringify(users));
		
	} else {
		let filePath = path.join(__dirname, 'public', req.url === '/'? 'index.html' : req.url);
		//extension of the file
		let extname = path.extname(filePath);
		//initial content-type
		let contentType = 'text/html'; //default
		//Check ext an set content type
		switch(extname) {
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
			case '.json':
				contentType = 'application/json';
				break;
			case '.jpg':
				contentType = 'image/jpg';
				break;
		}
		// Read file
		console.log('reading ' + filePath)
		fs.readFile(filePath, (err, content) => {
			if (err) {
				if (err.code === 'ENOENT') {
					// Page not found
					fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
						res.writeHead(200, {'Content-Type': 'text/html'})
						res.end(content, "utf-8")
					})
				} else {
					// Other error - server error
					res.writeHead(500)
					res.end(`Server Error: ${err.code}`)
				}
			} else {
				// SUCCESS
				console.log('returning: ' + content)
				res.writeHead(200, {'Content-Type': contentType})
				res.end(content, "utf-8")
			}
		});
		
		
		console.log(filePath);
		
	}
	
});
const PORT = process.env.PORT || 5000; // search the required port in the environment-variable (For Heroku)
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});









