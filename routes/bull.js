var express = require('express');
const bull_controlers= require('../controllers/bull');

var router = express.Router();

/* GET bull */
router.get('/', bull_controlers.bull_view_all_Page );
module.exports = router;




