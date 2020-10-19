let fs = require('fs')
let data = fs.readFileSync('text.txt')
console.log(data.toString())
console.log('ENDED')
