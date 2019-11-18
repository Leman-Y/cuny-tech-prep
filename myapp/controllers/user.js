

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
exports.signup = function(req, res, next){

}

exports.login = function(req, res, next){

}