const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg});

    }
}



const logger = new Logger();

logger.on('message', data => console.log('called Listener:',  data));

logger.log('hello world');
logger.log('helloz');

// module.exports = Logger;