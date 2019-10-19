//https://stackoverflow.com/questions/1611215/remove-a-git-commit-which-has-not-been-pushed

const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');
//Need to import modules like c++ libraries

const app = express();

//Passport.js authentication

/*
Handling requests
Handling http statuses
Handling responses, middleware, templates
*/

//Init middleware
//app.use(logger);

/*
app.get('/', (req,res) => {
	//res.send('<h1>Hello World!!!</h1');
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser Middleware
//Without this you get nothing back, need to use a body parser to parse the data in the body
//Used to need 3rd party body parser but now you can use express's middleware 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Homepage Route
app.get('/', (req, res) => res.render('index', {
	title: 'Member App',
	members
}));


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));


//Members API Routes
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));






















