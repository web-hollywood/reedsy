
var express = require('express');
var router = express.Router();

// Require controller modules.
var jobControllerObj = require('../../controllers/jobController');


/// -------------------- Job store Routes ------------------------ ///


// GET catalog home page.
// router.get('/', user_controller.index);

// GET : request to get a list of Export requests,  grouped by their current state
router.get('/job/export', jobControllerObj.getExportJobs);

// POST : A request for a new Export job.
router.post('/job/export', jobControllerObj.postExportJob);

// GET : request to get a list of Import requests, grouped by their current state
router.get('/job/import', jobControllerObj.getImportJobs);

// POST : A request for a new Import job.
router.post('/job/import', jobControllerObj.postImportJob);


module.exports = router;