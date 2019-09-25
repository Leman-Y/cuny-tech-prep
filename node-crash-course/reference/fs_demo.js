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
// control + shift + L to select multiple lines and edit
// Select vertically right click + shift and move cursor
/*
fs.writeFile(path.join(__dirname, '/test/', 'hello.txt'), 'Hello World!' , err => {
	if(err) throw err;
	console.log('File written to...');

	//File append
	fs.appendFile(path.join(__dirname, '/test/', 'hello.txt'), ' I love Node.js' , err => {
	if(err) throw err;
	console.log('File written to...');
	});


});
*/

/*
//Read file
fs.readFile(path.join(__dirname, '/test/', 'hello.txt'), 'utf8' , (err, data) => {
	if(err) throw err;
	console.log(data);
});
*/

//Read file
fs.rename(path.join(__dirname, '/test/', 'hello.txt'), path.join(__dirname, '/test/', 'helloworld.txt') , (err) => {
	if(err) throw err;
	console.log('File renamed...');
});






























