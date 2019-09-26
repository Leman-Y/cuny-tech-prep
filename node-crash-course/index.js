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
	//console.log(req.url);
	if(req.url === `/`){ //You know that is the index page with /
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
			if(err) throw err; 
			res.writeHead(200, {'Content-Type': `text.html`});
			res.end(content);
			//res.end('<h1>Homepage</h1>'); //If you change Home to homepage you see that the server will not refresh
		})

		//nodemon will help
	}
	/*
	if(req.url === `/about`){ //You know that is the index page with /
		fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,content) => {
			if(err) throw err; 
			res.writeHead(200, {'Content-Type': `text.html`});
			res.end(content);
			//res.end('<h1>Homepage</h1>'); //If you change Home to homepage you see that the server will not refresh
		})

		//nodemon will help
	}
	*/
	//
	if(req.url === '/api/users'){
		const users = [
			{name: 'Bob Smith', age: 40},
			{name: 'John Doe', age: 30}

		];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(users));
	}
});

//If not found then run on 5000
const PORT = process.env.PORT || 5000; //Whatever your host decides in the environment variable

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//You can see what URL is being called

//npm run dev . will run the script in package.json which will run nodemon
//nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

