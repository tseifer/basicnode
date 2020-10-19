const EventEmitter = require('events');

// We can emit events and listen to them with Event-Listeners

// Create an emmiter-class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('Event fired'));

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')










