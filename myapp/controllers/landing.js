
const models = require('../models');
//allow to get sequelize methods

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
	console.log("lead email:", req.body.lead_email);

	return models.Lead.create
	({
		email: req.body.lead_email
	}).then(lead => {
		res.redirect('/leads');
	})
}

//findall defined by sequelize
exports.show_leads = function(req, res, next) {
	return models.Lead.findAll().then(leads => {
	  res.render('landing', { title: 'Express', leads: leads });
	})
}

//params - parameters
exports.show_lead = function(req, res, next) {
	return models.Lead.findOne({
		where : {
			id : req.params.lead_id
		}
	}).then(lead => {
		res.render('lead', { lead : lead });
	})


}

