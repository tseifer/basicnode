const fs = require('fs')
const path = require('path')

// // create a folder

// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
// 	if (err) throw err;
// 	console.log('folder created');
// }); //asynchronous function! so will tale callback/ We may also call mkdirSync which just wait to be finish

// Create and write to file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), "Hello world\n", (err) => {
	if (err) throw err;
	console.log('file written to');
	
	// append to file
	fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), "Esta La Vista\n", (err) => {
		if (err) throw err;
		console.log('file appended to');
		
		// read from file
		fs.readFile(path.join(__dirname, 'test', 'hello.txt'), "utf8", (err, data) => {
			if (err) throw err;
			console.log(data);
		}); //asynchronous function! so will tale callback/ We may also call mkdirSync which just wait to be finish
		
	}); //asynchronous function! so will tale callback/ We may also call mkdirSync which just wait to be finish
	
}); //asynchronous function! so will tale callback/ We may also call mkdirSync which just wait to be finish

// also fs.rename() and more



