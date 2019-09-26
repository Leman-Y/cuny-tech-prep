//You can deploy node.js app to internet with heroku

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

//Create a server that gets a request and response
//Serving the response and learning about http
const server = http.createServer((req,res) => {
	//console.log(req.url);
	/*
	if(req.url === `/`){ //You know that is the index page with /
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
			if(err) throw err; 
			res.writeHead(200, {'Content-Type': `text.html`});
			res.end(content);
			//res.end('<h1>Homepage</h1>'); //If you change Home to homepage you see that the server will not refresh
		})

		//nodemon will help
	}
	
	if(req.url === `/about`){ //You know that is the index page with /
		fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,content) => {
			if(err) throw err; 
			res.writeHead(200, {'Content-Type': `text.html`});
			res.end(content);
			//res.end('<h1>Homepage</h1>'); //If you change Home to homepage you see that the server will not refresh
		})

		//nodemon will help
	}
	
	//Usually fetch data from a database and serve that
	//If you want to build a restapi you would do this with just node but people do it with express
	//This is not efficient. For all pages you would have to do this and you need to include images and css
	if(req.url === '/api/users'){
		const users = [
			{name: 'Bob Smith', age: 40},
			{name: 'John Doe', age: 30}

		];
		res.writeHead(200, {'Content-Type': 'application/json'});
		//The JSON.stringify() method converts a JavaScript object or value to a JSON string
		res.end(JSON.stringify(users));
	}
	*/

	//Build file path
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
	//console.log(filePath);
	//res.end();

	//Extension of file
	let extname = path.extname(filePath);

	//Initial content type
	let contentType = 'text/html';

	//Check ext and set content type
	//File types you want to handle for this server
	switch(extname){
	    case ".js":
	      contentType = "text/javascript";
	      break;
	    case ".css":
	      contentType = "text/css";
	      break;
	    case ".json":
	      contentType = "application/json";
	      break;
	    case ".png":
	      contentType = "image/png";
	      break;
	    case ".jpg":
	      contentType = "image/jpg";
	      break;
	}

	//Read file
	//File system module
	fs.readFile(filePath, (err,content) => {
		if(err){
			if(err.code == 'ENOENT'){
				//Page not found. Page doesnt exist so go to 404 page
				fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content) => {
				 	res.writeHead(200, { 'Content-Type': 'text/html'});
				 	res.end(content, 'utf8');
				 } )
			}
			else
			{
				//Some server error
				res.writeHead(500);
				res.end(`Server Error: ${err.code}`);
			}
		} 
		else
		{
			//Success
			res.writeHead(200, { 'Content-Type': contentType});
			res.end(content, 'utf8');
		}
	});

});

//You can go to dev tools on chrome, refresh, go to names, localhost, and headers to see the content type, request method, etc

//If not found then run on 5000
const PORT = process.env.PORT || 5000; //Whatever your host decides in the environment variable

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//You can see what URL is being called

//npm run dev . will run the script in package.json which will run nodemon
//nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

