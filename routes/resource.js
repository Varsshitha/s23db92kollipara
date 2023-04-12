var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bull_controller = require('../controllers/bull');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/bull', bull_controller.bull_create_post);
// DELETE request to delete Costume.
router.delete('/bull/:id', bull_controller.bull_delete);
// PUT request to update Costume.
router.put('/bull/:id', bull_controller.bull_update_put);
// GET request for one Costume.
router.get('/bull/:id', bull_controller.bull_detail);
// GET request for list of all Costume items.
router.get('/bull', bull_controller.bull_list);
module.exports = router;


