const fs = require('fs');
const path = require('path');

//Creates a folder
/*
fs.mkdir(path.join(__dirname, '/test/'), {} , err => {
	if(err) throw err;
	console.log('Folder created...');
});
*/

//Create and write to file - overwrites
fs.writeFile(path.join(__dirname, '/test/', 'hello.txt'), 'Hello World!' , err => {
	if(err) throw err;
	console.log('File written to...');

	//File append
	fs.appendFile(path.join(__dirname, '/test/', 'hello.txt'), ' I love Node.js' , err => {
	if(err) throw err;
	console.log('File written to...');
});


});



