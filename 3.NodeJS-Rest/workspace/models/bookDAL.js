var bbPromise = require('bluebird');
var mysql = require('mysql');
var mysqlConPool = require('../config/mysqlConnector');
var using = Promise.using;

bbPromise.promisifyAll(require("mysql/lib/Pool").prototype);
bbPromise.promisifyAll(require("mysql/lib/Connection").prototype);

// bbPromise.promisifyAll([Pool, Connection]);


// ---------------------------------------------------------------------
// fetch list of books from the database 
// return book list
exports.getBooks = function(pageNum) {
  
    console.log('fetching book list from database ');
    const recordPerPage = 5;

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

          console.log("page number " + pageNum) ;
  
           let startIndex = (pageNum-1)*recordPerPage;
           // var sql = 'SELECT * from books limit ' + startIndex + ',' + recordPerPage;

           var sql = " SELECT books.*, GROUP_CONCAT(store_name, ';', url SEPARATOR '<----->') as stores_links " +
                     " FROM books " +
                     " left join book_store on books.id = book_store.book_id " +
                     " left join store on store.id = book_store.store_id " +
                     " group by books.id limit " + startIndex + "," + recordPerPage;
            
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
                    // resolve(sqlResult);      

                    // get total number of records 
                    var sqlTotal = 'SELECT count(1) as record_count from books';
                    console.log("total record sql query =" + sqlTotal) ;
          
                    // con.query(sql, [userName], function (err, result, fields) {
                    connection.query(sqlTotal, [], function (errTotal, sqlTotalResult) {
          
                        if (errTotal){
                                console.log("Error in running total sql query " + errTotal) ;
                                console.log("SQL=" + sqlTotal) ;
                                reject(err);
                                return;
                        } 
            
                        console.log("SQL query result " + sqlTotalResult);
        
                        if(sqlTotalResult){
                            // numRows = sqlResult.length;           // select query
                            // numRows = result.affectedRows;     // update delete
                            // console.log(sqlResult[0].password) ;  
                            console.log(sqlResult) ;  
                            let finalResult = Array();
                            finalResult['total_record'] = sqlTotalResult[0].record_count;
                            finalResult['total_page'] = parseInt((sqlTotalResult[0].record_count+recordPerPage-1)/recordPerPage);
                            finalResult['books'] = sqlResult;
                            resolve(finalResult);      
        
                        }else{
                            var result = 'No result found';
                            resolve(result);
                        }
        
                        connection.release();
        
          
                    });     // end SQL query


                }else{
                    var result = 'No result found';
                    resolve(result);
                }

                // connection.release();

  
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