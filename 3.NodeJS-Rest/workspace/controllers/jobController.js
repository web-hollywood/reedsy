// ---- system modules ---------------
var Promise = require('bluebird');
var url = require('url');

var jobModelObj=require('../models/jobDAL');

// ---------------------------------------------------------------------------------
/*
Description :  new export job
Method : POST
Sample request payload 
{
  bookId: string,
  type: "epub" | "pdf"
}
*/
exports.postExportJob = function(req, res) {

    let debug = true;

    if(debug){
        console.log(req.body);      // request JSON
    }
    jobJson = req.body;
    res.setHeader('content-type', 'application/json');
    let isInputError = false;    
    let inputErrorMsg = "Invalid input parameter. ";    

    // validation on input parametes 
    if(!jobJson.bookId || jobJson.bookId == ""){
        isInputError = true;
        inputErrorMsg = inputErrorMsg + " bookId is missing in request payload.";
    }
    if(!jobJson.type || jobJson.type == ""){
        isInputError = true;
        inputErrorMsg = inputErrorMsg + " type is missing in request payload.";
    }
    if(jobJson.type != "epub" && jobJson.type != "pdf"){
        isInputError = true;
        inputErrorMsg = inputErrorMsg + " type value must be either epub or pdf.";
    }
    // error found in input 
    if(isInputError){
        var result = '{"code" : "0", "message" : "' + inputErrorMsg + '"}';        
        res.send(result);
        return;
    }
    
    if(debug){
        console.log("book id " + jobJson.bookId);
        console.log("book type " + jobJson.type);
    }
    
    // insert into the database 
    jobModelObj.insertExportJob(jobJson)
    .then(function(dbResult){
        console.log("got result from model object");
        // success
        if(dbResult){
            var jsonResult = '{"code" : "1", "message" : "success"}';
            res.send(jsonResult);
        }else{
            var jsonResult = '{"code" : "0", "message" : "error"}';
            res.send(jsonResult);
        }
        
    }).catch(function (err) {
        // log.error(err);       
        console.log(err);
        var jsonResult = '{"code" : "0", "message" : "error in inserting data", "errorlog" : ' + JSON.stringify(err) + '}';        
        res.send(jsonResult);        
        res.send(err);
    });    

    // res.send(req.body);    // echo the result back
};

/*
Description :  get list of export job 
Method : GET
query parameter : jobstate
*/
exports.getExportJobs = function(req, res) {    
    
    let debug = true;

    //console.log("book id " + jobJson.bookId);
    res.setHeader('content-type', 'application/json');
    
    
    // validation on input parametes 
    let isInputError = false;    
    let inputErrorMsg = "";      
    // state is optional parameter. if not exist then fetch all the export job 
    let jobState = req.query.jobstate;
    // check if filter creteria exist in the input parameter 
    if(jobState){
        // if not the valid jobstate
        if(jobState != "pending" && jobState != "finished"){
            isInputError = true;    
            inputErrorMsg = "jobstate must be either pending or finished";    
        }    
    }else{
        jobState = "all";
    } 
        
    // error found in input 
    if(isInputError){
        var result = '{"code" : "0", "message" : "' + inputErrorMsg + '"}';        
        res.send(result);
        return;
    }

    // get jobs from the database 
    jobModelObj.getExportJobs(jobState)
    .then(function(dbResult){
        console.log("got result from model object");        
        // success
        if(dbResult){

            var finishedExportJob = Array();
            var pendingExportJob = Array();
            if(dbResult && dbResult.length > 0){
                // group the result 
                for(i=0;i<dbResult.length;i++){
                    if(dbResult[i].job_status == 'pending'){
                        pendingExportJob.push(dbResult[i]);
                    }else{
                        finishedExportJob.push(dbResult[i]);
                    }
                }
            }
            

            var jsonResult = '{"code" : "1", ' + 
                             ' "message" : "success",' +
                             ' "pending_jobs" : ' + JSON.stringify(pendingExportJob) + ',' +
                             ' "finished_jobs" : ' + JSON.stringify(finishedExportJob) + '}';            
            
            res.send(jsonResult);
            // res.send(dbResult);
        }else{
            var jsonResult = '{"code" : "0", "message" : "error"}';
            res.send(dbResult);
        }
        
    }).catch(function (err) {
        // log.error(err);       
        console.log(err);
        var jsonResult = '{"code" : "0", "message" : "error in getting export jobs", "errorlog" : ' + JSON.stringify(err) + '}';        
        res.send(jsonResult);           
    });    
    

};


// ---------------------------------------------------------------------------------
/*
Description :  new import job
Method : POST
Sample request payload 
{
  bookId: string,
  type: "word" | "pdf" | "wattpad" | "evernote",
  url: string
}
*/
exports.postImportJob = function(req, res) {

    let debug = true;

    if(debug){
        console.log(req.body);      // request JSON
    }
    jobJson = req.body;
    res.setHeader('content-type', 'application/json');
    let isInputError = false;    
    let inputErrorMsg = "Invalid input parameter. ";    

    // validation on input parametes 
    var validJobTypeArr = ['word','pdf','wattpad','evernote'];

    if(!jobJson.bookId || jobJson.bookId == ""){
        isInputError = true;
        inputErrorMsg = inputErrorMsg + " bookId is missing in request payload.";
    }
    if(!jobJson.type || jobJson.type == ""){
        isInputError = true;
        inputErrorMsg = inputErrorMsg + " type is missing in request payload.";
    }
    if(validJobTypeArr.indexOf(jobJson.type) == -1){
        isInputError = true;
        inputErrorMsg = inputErrorMsg + " invalid value of job type.";
    }
    if(!jobJson.url){
        isInputError = true;
        inputErrorMsg = inputErrorMsg + " url is missing in request payload.";
    }    
    // error found in input 
    if(isInputError){
        var result = '{"code" : "0", "message" : "' + inputErrorMsg + '"}';        
        res.send(result);
        return;
    }
    
    if(debug){
        console.log("book id " + jobJson.bookId);
        console.log("book type " + jobJson.type);
    }
    
    // insert into the database 
    jobModelObj.insertImportJob(jobJson)
    .then(function(dbResult){
        console.log("got result from model object");
        // success
        if(dbResult){
            var jsonResult = '{"code" : "1", "message" : "success"}';
            res.send(jsonResult);
        }else{
            var jsonResult = '{"code" : "0", "message" : "error"}';
            res.send(jsonResult);
        }
        
    }).catch(function (err) {
        // log.error(err);       
        console.log(err);
        var jsonResult = '{"code" : "0", "message" : "error in inserting data", "errorlog" : ' + JSON.stringify(err) + '}';        
        res.send(jsonResult);        
        res.send(err);
    });    

    // res.send(req.body);    // echo the result back
};


/*
Description :  get list of export job 
Method : GET
query parameter : jobstate
*/
exports.getImportJobs = function(req, res) {    
    
    let debug = true;

    //console.log("book id " + jobJson.bookId);
    res.setHeader('content-type', 'application/json');
    
    
    // validation on input parametes 
    let isInputError = false;    
    let inputErrorMsg = "";      
    // state is optional parameter. if not exist then fetch all the export job 
    let jobState = req.query.jobstate;
    // check if filter creteria exist in the input parameter 
    if(jobState){
        // if not the valid jobstate
        if(jobState != "pending" && jobState != "finished"){
            isInputError = true;    
            inputErrorMsg = "jobstate must be either pending or finished";    
        }    
    }else{
        jobState = "all";
    } 
        
    // error found in input 
    if(isInputError){
        var result = '{"code" : "0", "message" : "' + inputErrorMsg + '"}';        
        res.send(result);
        return;
    }

    // get jobs from the database 
    jobModelObj.getImportJobs(jobState)
    .then(function(dbResult){
        console.log("got result from model object");        
        // success
        if(dbResult){

            var finishedImportJob = Array();
            var pendingImportJob = Array();
            if(dbResult && dbResult.length > 0){
                // group the result 
                for(i=0;i<dbResult.length;i++){
                    if(dbResult[i].job_status == 'pending'){
                        pendingImportJob.push(dbResult[i]);
                    }else{
                        finishedImportJob.push(dbResult[i]);
                    }
                }
            }
            
            var jsonResult = '{"code" : "1", ' + 
                             ' "message" : "success",' +
                             ' "pending_jobs" : ' + JSON.stringify(pendingImportJob) + ',' +
                             ' "finished_jobs" : ' + JSON.stringify(finishedImportJob) + '}';            
            
            res.send(jsonResult);


        }else{
            var jsonResult = '{"code" : "0", "message" : "error"}';
            res.send(dbResult);
        }
        
    }).catch(function (err) {
        // log.error(err);       
        console.log(err);
        var jsonResult = '{"code" : "0", "message" : "error in getting export jobs", "errorlog" : ' + JSON.stringify(err) + '}';        
        res.send(jsonResult);           
    });    
    

};
