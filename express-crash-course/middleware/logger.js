const moment = require('moment');


//Everytime you make a request, the middleware will run
const logger = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
	next();
};

module.exports = logger;