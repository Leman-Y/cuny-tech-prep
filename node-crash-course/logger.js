const EventEmitter = require('events');
const uuid = require('uuid') //Creates random universal
/*
(Universal Unique Identifier) is a 128-bit number used to uniquely identify some object or entity on the Internet. Depending on the specific mechanisms used, a UUID is either guaranteed to be different or is, at least, extremely likely to be different from any other UUID generated until 3400 A.D. A standard of generating ids, standardized by the Open Software Foundation (OSF).

*/

//console.log(uuid.v4());

class Logger extends EventEmitter {
	log(msg){
		//Call event
		this.emit('message',{id: uuid.v4(), msg:msg});
	}
}

module.exports = Logger; 