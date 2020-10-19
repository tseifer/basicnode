let express = require('express');
let routes = require('./routes');
let http = require('http');
let path = require('path'); // for absolute paths
let urlencoded = require('url');
let bodyParser = require('body-parser'); // for dealing with json files
let json = require('json'); //to send json formay
let logger = require('logger');
let methodOverride = require('method-override');
let nano = require('nano')('http://localhost:5948'); /// connection to couchDB

let db = nano.use('address');
let app = express();

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view_engine', jade)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(methodOverride())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', routes.index) //root of main
app.post('/createdb', (req, res) => {
	nano.db.create(req.body.dbname, (err) => {
		if (err) {
			res.send("Error creating DB" + req.body.dbname)
			return;
		}
		req.send('Database ' + req.body.dbname + " created successfully")
	})
})

app.post('/new_contact', (req, res) => {
	let name = req.body.name;
	let phone = req.body.phone;
	
	db.insert({name: name, phone: phone, crazy: true}, phone, (err, body, header) => {
		if (err) {
			res.send("Error creating contact" )
			return;
		}
		req.send('DContact created successfully');
	})
})

app.post('view_contact', (req, res) => {
	let alldoc = 'Following are the contacts'
	db.get(req.body.phone, {revs_info: true}, (err, body) => {
		if (!err) {
			console.log(body)
		}
		if (body) {
			alldoc += 'Name: ' + body.name + "<br/>Phone number: " + body.phone
		}
		else {
			alldocs = "No records found";
		}
		res.send(alldoc)
	})
})

app.post('/delete_contact', (req, res) => {
	db.get(req.body.phone, {revs_info: true}, (err, body) => {
		if (!err) {
			db.destroy(req.body.phone, body._rev, (err, body) => {
				if (err) {
					res.send("error deleting contact")
				}
				res.send("Contacts deleted successfully")
			})
		}
	})
})

http.createServer(app).listen(app.get('port'), () => {
	console.log('express server listening to port' + app.get('port'))
})
