const url = require('url')

const myUrl = new URL('http://mywesite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.href.toString()) // same
console.log(myUrl.host) //mywebsite.com:8000
console.log(myUrl.hostname) // without the port
console.log(myUrl.pathname) // /hello.html (the actual file)

//Serialize the query params
console.log(myUrl.search); // ?id=100&status=active
console.log(myUrl.searchParams); // URLSearchParams map with value: { 'id' => '100', 'status' => 'active' }

// Add a param to URL:
myUrl.searchParams.append('abc', 123);
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));














