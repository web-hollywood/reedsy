// ---- system modules ---------------
var Promise = require('bluebird');
var url = require('url');

var bookModelObj=require('../models/bookDAL');



// --------------------- Render view --------------------------------------------
/*
Description :  render index page
Method : GET
*/
exports.getIndexPage = function(req, res) {
    // parameter : tempalte + data
    res.render('index', { title: '5Exceptions' });
};

// ---------------------------------------------------------------------------------
/*
Description :  render book home page
Method : GET
*/
exports.getBookHomePage = function(req, res) {
    // parameter : tempalte + data
    res.render('books', { title: '5Exceptions' });
    // res.render('books.ejs');
};

