var express = require('express');
const bull_controlers= require('../controllers/bull');

var router = express.Router();

//A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
//GET request for one bull.
router.get('/', bull_controlers.bull_view_all_Page);
router.get('/detail',secured, bull_controlers.bull_view_one_Page);
router.get('/create', secured,bull_controlers.bull_create_Page);

router.get('/delete',secured, bull_controlers.soaps_delete_Page);
router.get('/update', secured,bull_controlers.bull_update_Page);

/* GET bull */
router.get('/', bull_controlers.bull_view_all_Page );

/* GET detail costume page */
router.get('/detail', bull_controlers.bull_view_one_Page);

/* GET create costume page */
router.get('/create', bull_controlers.bull_create_Page);

/* GET create update page */
router.get('/update', bull_controlers.bull_update_Page);

/* GET delete costume page */
router.get('/delete', bull_controlers.bull_delete_Page);


module.exports = router;




