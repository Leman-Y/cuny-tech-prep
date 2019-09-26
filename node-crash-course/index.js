//import person from ./person


/*
console.log('yooo');

const person = require('./person')

const person1 = new person(`Bob Lazar`, 99);


person1.greeting();


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener:`, data));

logger.log('Hello World');

*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
	console.log(req.url);
});

//If not found then run on 5000
const PORT = process.env.PORT || 5000; //Whatever your host decides in the environment variable

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//You can see what URL is being called

