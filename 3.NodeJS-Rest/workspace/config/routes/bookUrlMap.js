
var express = require('express');
var router = express.Router();

// Require controller modules.
var bookControllerObj = require('../../controllers/bookController');


/// -------------------- Book store Routes ------------------------ ///

// GET : request to get a list of books
router.get('/book', bookControllerObj.getBookList);


module.exports = router;