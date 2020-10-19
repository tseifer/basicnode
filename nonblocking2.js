let fs = require('fs')
fs.readFile('text.txt', (err, data) => {
	if (err) {
		console.log(err)
	} else {
		console.log(data.toString())
	}
	setTimeout(()=> {
		console.log('after 2 sec')
	}, 2000)
	console.log()
})

console.log('STart here')
