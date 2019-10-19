//https://stackoverflow.com/questions/1611215/remove-a-git-commit-which-has-not-been-pushed

const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');
//Need to import modules like c++ libraries

const app = express();



//Init middleware
//app.use(logger);

/*
app.get('/', (req,res) => {
	//res.send('<h1>Hello World!!!</h1');
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/



//Gets All Members 
app.get('/api/members', (req,res) => res.json(members));

//Get Single Member
app.get('/api/members/:id', (req,res) => {
	//res.send(req.params.id);
	res.json(members.filter(member => member.id === parseInt(req.params.id)) );
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));