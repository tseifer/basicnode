const EventEmitter = require('events');

// We can emit events and listen to them with Event-Listeners

// Create an emmiter-class
class MyEmitter extends EventEmitter {
}

// Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('Event fired'));

myEmitter.on('event222222', () => console.log('sdsdfsdfsad'));

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event222222')
myEmitter.emit('event')

class Logger extends EventEmitter {
	log(message) {
		console.log(message);
		this.emit('messageLogged', {id: 1, msg: message})
	}
}

const logger = new Logger()
logger.on('messageLogged', () => console.log('logged some data'))

module.exports = Logger;








