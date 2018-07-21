var bbPromise = require('bluebird');
var mysql = require('mysql');
var mysqlConPool = require('../config/mysqlConnector');
var using = Promise.using;

bbPromise.promisifyAll(require("mysql/lib/Pool").prototype);
bbPromise.promisifyAll(require("mysql/lib/Connection").prototype);

// bbPromise.promisifyAll([Pool, Connection]);

// ---------------------------------------------------------------------
// insert export job into the database 
// return boolean : true or false
exports.insertExportJob = function(bookJsonObj) {
  
    console.log('inserting export job in database ');

     return new bbPromise(function(resolve, reject) {

        // mysqlConPool.getConnection
        mysqlConPool.getConnection(function (err, connection) {

        if (err) {
            console.log("Error in creating DB connection " + err) ;
            // connection.release();
            // callback(null, err);
            reject(err);
            // throw err;
            return;
        }else{
          console.log("DB connection successful ") ;
        }

          var sql = 'INSERT into export_jobs(`book_id`, `job_type`) VALUES(?,?)';
          console.log("sql " + sql) ;
          console.log("export job " + bookJsonObj.bookId + " : " + bookJsonObj.type) ;
          // execute SQL query   
          connection.query(sql, [bookJsonObj.bookId, bookJsonObj.type], function (err, sqlResult) {

            if (err){
                  console.log("Error in running sql to insert new export job " + err) ;
                  console.log("SQL=" + sql) ;
                  reject(err);
                  return;
            } 

            console.log("SQL query result " + sqlResult);
            var result = false;

            if(sqlResult){
                result = true;
            }
              
            connection.release();
            resolve(result);

          });     // end SQL query

          connection.on('error', function (err) {
            connection.release();
            // callback(null, err);
            // throw err;
            reject(err);
          });

        });       // end DB connection    
  });

};


// ---------------------------------------------------------------------
// fetch export job list from the database 
// return job list
exports.getExportJobs = function(jobState) {
  
    console.log('fetching export job list from database ');
  
    return new bbPromise(function(resolve, reject) {
  
          // mysqlConPool.getConnection
          mysqlConPool.getConnection(function (err, connection) {
  
          if (err) {
              console.log("Error in creating DB connection " + err) ;
              // connection.release();
              // callback(null, err);
              reject(err);
              // throw err;
              return;
          }else{
            console.log("DB connection successful ") ;
          }

          console.log("job state = " + jobState) ;
          
  
            var sql = 'SELECT * from export_jobs';
            
            // apply filter creteria 
            if(jobState == 'pending'){
                sql = sql + " WHERE job_status='pending'";
            }
            else if(jobState == 'finished'){
                sql = sql + " WHERE job_status='finished'";
            }
            else{
                sql = sql + " order by job_status";
            }

            console.log("sql query =" + sql) ;
  
            // con.query(sql, [userName], function (err, result, fields) {
            connection.query(sql, [], function (err, sqlResult) {
  
            if (err){
                    console.log("Error in running sql query " + err) ;
                    console.log("SQL=" + sql) ;
                    reject(err);
                    return;
            } 
  
            console.log("SQL query result " + sqlResult);

            if(sqlResult){
                // numRows = sqlResult.length;           // select query
                // numRows = result.affectedRows;     // update delete
                // console.log(sqlResult[0].password) ;  
                console.log(sqlResult) ;  
                resolve(sqlResult);      
            }else{
                var result = 'No result found';
                resolve(result);
            }

            connection.release();

  
            });     // end SQL query
  
            connection.on('error', function (err) {
              connection.release();
              // callback(null, err);
              // throw err;
              reject(err);
            });
  
          });       // end DB connection    
    });
  
};
  
// ---------------------------------------------------------------------
// insert export job into the database 
// return boolean : true or false
exports.insertImportJob = function(bookJsonObj) {
  
    console.log('inserting import job in database ');

     return new bbPromise(function(resolve, reject) {

        // mysqlConPool.getConnection
        mysqlConPool.getConnection(function (err, connection) {

        if (err) {
            console.log("Error in creating DB connection " + err) ;
            // connection.release();
            // callback(null, err);
            reject(err);
            // throw err;
            return;
        }else{
          console.log("DB connection successful ") ;
        }

          var sql = 'INSERT into import_jobs(`book_id`, `job_type`, `url`) VALUES(?,?,?)';
          console.log("sql " + sql) ;
          console.log("export job " + bookJsonObj.bookId + " : " + bookJsonObj.type + " : " + bookJsonObj.url) ;
          // execute SQL query   
          connection.query(sql, [bookJsonObj.bookId, bookJsonObj.type, bookJsonObj.url], function (err, sqlResult) {

            if (err){
                  console.log("Error in running sql to insert new export job " + err) ;
                  console.log("SQL=" + sql) ;
                  reject(err);
                  return;
            } 

            console.log("SQL query result " + sqlResult);
            var result = false;

            if(sqlResult){
                result = true;
            }
              
            connection.release();
            resolve(result);

          });     // end SQL query

          connection.on('error', function (err) {
            connection.release();
            // callback(null, err);
            // throw err;
            reject(err);
          });

        });       // end DB connection    
  });

};


// ---------------------------------------------------------------------
// fetch import job list from the database 
// return job list
exports.getImportJobs = function(jobState) {
  
    console.log('fetching export job list from database ');
  
    return new bbPromise(function(resolve, reject) {
  
          // mysqlConPool.getConnection
          mysqlConPool.getConnection(function (err, connection) {
  
          if (err) {
              console.log("Error in creating DB connection " + err) ;
              // connection.release();
              // callback(null, err);
              reject(err);
              // throw err;
              return;
          }else{
            console.log("DB connection successful ") ;
          }

          console.log("job state = " + jobState) ;
          
  
            var sql = 'SELECT * from import_jobs';
            
            // apply filter creteria 
            if(jobState == 'pending'){
                sql = sql + " WHERE job_status='pending'";
            }
            else if(jobState == 'finished'){
                sql = sql + " WHERE job_status='finished'";
            }
            else{
                sql = sql + " order by job_status";
            }

            console.log("sql query =" + sql) ;
  
            // con.query(sql, [userName], function (err, result, fields) {
            connection.query(sql, [], function (err, sqlResult) {
  
            if (err){
                    console.log("Error in running sql query " + err) ;
                    console.log("SQL=" + sql) ;
                    reject(err);
                    return;
            } 
  
            console.log("SQL query result " + sqlResult);

            if(sqlResult){
                // numRows = sqlResult.length;           // select query
                // numRows = result.affectedRows;     // update delete
                // console.log(sqlResult[0].password) ;  
                console.log(sqlResult) ;  
                resolve(sqlResult);      
            }else{
                var result = 'No result found';
                resolve(result);
            }

            connection.release();

  
            });     // end SQL query
  
            connection.on('error', function (err) {
              connection.release();
              // callback(null, err);
              // throw err;
              reject(err);
            });
  
          });       // end DB connection    
    });
  
};


