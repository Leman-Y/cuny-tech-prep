//import person from ./person



console.log('yooo');

const person = require('./person')

const person1 = new person(`Bob Lazar`, 99);


person1.greeting();


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener:`, data));

logger.log('Hello World');

