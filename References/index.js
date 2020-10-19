const Person = require('../Person');
const path = require('path')

const person1 = new Person('Avi', 23);
person1.greeting();

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(path.join(__dirname, 'test', 'hello.html')); // will add the right delimiter of / or \


