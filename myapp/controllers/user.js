//Bug Looks like I messed up when copying the code and going along
//in order to use models object

let models = require("../models");
let bcrypt = require("bcrypt");
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);
let flash = require('connect-flash'); //Flash allows us to display an error message on the page that's going to be rendered so its a one time message we can send to client

exports.show_login = function(req, res, next){
	res.render('user/login', { formData: {}, errors: {} });
}

exports.show_signup = function(req, res, next){
	res.render('user/signup', { formData: {}, errors: {} });
}
 
/*
Implmement signup and login route using node js library called passport js
Implements authentiation, could use social networks or other means
Can go to passportjs.org for more details

npm install passport passport-local bcrypt validator express-session connect-flash --save

*/

//Created a salted password and save hash into database
const generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

//Create new user and save it to the database 
exports.signup = function(req, res, next) {
	//Validate user and password 
	const newUser = models.User.build({
		email: req.body.email,
		password: generateHash(req.body.password)
	});
	return newUser.save().then(result => {
		passport.authenticate('local', {
			successRedirect: "/",
			failureRedirect: "/signup",
			failureFlash: true
		})(req, res, next);
	})
}


exports.login = function(req, res, next) { 
	passport.authenticate('local', {
		successRedirect: "/",
		failureRedirect: "/login",
		failureFlash: true
	})(req, res, next);
}

exports.logout = function(req, res, next) { 
	req.logout();
	req.session.destroy();
	res.redirect('/'); //It's res.redirect not req 
}

