const http = require('http');

//Create server object
http.createServer((req, res) => {
	//Write response
	res.write('Hello World');
	res.end();

}).listen(5000, () => console.log('Server running...'));
//Go to http://localhost:5000/ and then you see Hello World on a blank screen

