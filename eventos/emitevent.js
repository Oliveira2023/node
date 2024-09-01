var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear an event!');
};

//Assign the event handler to an event:
eventEmitter.on('evento', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('evento');