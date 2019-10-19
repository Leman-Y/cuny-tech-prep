//https://stackoverflow.com/questions/1611215/remove-a-git-commit-which-has-not-been-pushed

const express = require('express');
const path = require('path');
//Need to import modules like c++ libraries

const app = express();

/*
app.get('/', (req,res) => {
	//res.send('<h1>Hello World!!!</h1');
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob@gmail.com',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Shannon Jackson',
    email: 'shannon@gmail.com',
    status: 'active'
  }
];

//Gets All Members 
app.get('/api/members', (req,res) => res.json(members));


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));