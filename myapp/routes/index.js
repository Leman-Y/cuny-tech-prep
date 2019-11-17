var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing')

/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead); //unique path component 
// I forgot the / in /lead and that messed things up. Is there a better way to know your errors? Or debug? 

module.exports = router;
