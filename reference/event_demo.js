const EventEmitter = require('events');

// Create class
class MyEmitter extends  EventEmitter { };

// init object
const myEmitter1 = new MyEmitter();

// Event listener 
myEmitter1.on('event', () => console.log('Event Fired'));

//Init event
myEmitter1.emit('event');