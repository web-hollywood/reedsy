// ---- system modules ---------------
var Promise = require('bluebird');
var url = require('url');

var bookModelObj=require('../models/bookDAL');



/*
Description :  API to get list of books
Method : GET
query parameter : page
*/
exports.getBookList = function(req, res) {    
    
    let debug = true;

    //console.log("book id " + bookJson.bookId);
    res.setHeader('content-type', 'application/json');
    
    
    // validation on input parametes 
    let isInputError = false;    
    let inputErrorMsg = "";      
    // state is optional parameter. if not exist then fetch all the export job 
    let page = req.query.page;
    let pageNum = 1;
    pageNum = parseInt(page);

    // page number can not be negative 
    if(!pageNum || pageNum < 1){
        pageNum = 1;
    }
        
    // error found in input 
    if(isInputError){
        var result = '{"code" : "0", "message" : "' + inputErrorMsg + '"}';        
        res.send(result);
        return;
    }

    // get jobs from the database 
    bookModelObj.getBooks(pageNum)
    .then(function(dbResult){
        console.log("got result from model object");        
        // success
        if(dbResult){

            var jsonResult = '{"code" : "1", ' + 
                             ' "message" : "success",' +
                             ' "current_page" : "' + pageNum + '",' +
                             ' "total_page" : "' + dbResult['total_page'] + '",' +
                             ' "total_record" : "' + dbResult['total_record'] + '",' +
                             ' "books" : ' + JSON.stringify(dbResult['books'])  + '}';            
            
            res.send(jsonResult);
            // res.send(dbResult);
        }else{
            var jsonResult = '{"code" : "0", "message" : "error"}';
            res.send(dbResult);
        }
        
    }).catch(function (err) {
        // log.error(err);       
        console.log(err);
        var jsonResult = '{"code" : "0", "message" : "error in getting book list", "errorlog" : ' + JSON.stringify(err) + '}';        
        res.send(jsonResult);           
    });    
    

};


