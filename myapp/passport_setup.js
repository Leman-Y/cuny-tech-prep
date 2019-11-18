//https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize

//local strategy to authenticate email and password
let LocalStrategy = require('passport-local').Strategy;

let bcrypt = require('bcrypt');
let models = require('./models');
let flash = require('connect-flash');

const validPassword = function(user, password) {
	return bcrypt.compareSync(password, user.password); //is a hash. if database is compromised, only access to encrypted versions
}
module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		done(null, user.id)
	});
	passport.deserializeUser(function(id, done) {
		models.User.findOne({
			where: {
				'id' : id
			}
		}).then(user => {
			if (user == null) {
				done(new Error('Wrong user id.'))
			}
			done(null, user);
		})
	});
	passport.use(new LocalStrategy({
		usernameField: 'email',  //req.body.email
		passwordField: 'password',
		passReqToCallback: true
	},
	//Need to define authentication function and show there is indeed a user with email address and password provided
	function(req, email, password, done) {
		return models.User.findOne({
			where: {
				'email' : email
			},
		}).then(user => { //multiple error cases
			if (user == null) { 
				req.flash('message', 'Incorrect credentials.') //Will show in rerender of the page
				return done(null, false)
			} else if (user.password == null || user.password == undefined) {
				req.flash('message', 'You must reset your password')
				return done(null, false)
			} else if(!validPassword(user, password)) {
				req.flash('message', 'Incorrect credentials')
				return done(null, false)
			}
			return done(null, user);
		}).catch(err => { //Internal server errors
			done(err, false);
		})
	}))
}