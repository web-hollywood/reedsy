
var express = require('express');
var router = express.Router();

// Require controller modules.
var rootControllerObj = require('../../controllers/rootController');


/// -------------------- controller to show view pages --------------------- ///

// GET : request to get index file
router.get('/', rootControllerObj.getIndexPage);

// GET : request to get book home page 
router.get('/bookhome', rootControllerObj.getBookHomePage);


module.exports = router;