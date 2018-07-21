// ---------------------------- Modules  --------------------------------

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// connection= require('./config/connection'),
// session = require('express-session'),
// flash = require('express-flash'),
// routes =require('./config/routes'),
// promise=require('express-promise')
// config=require('./config/config');



// -------------- initialize the express application object -------------
var app = express();


// ----------------------- View + template Engine setup -------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// ------------------------- Parser ----------------
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ------------------------ Routes (URL mapping) ---------------------------

var root_route = require('./config/routes/rootUrlMap');

var job_api_route = require('./config/routes/jobUrlMap');
var book_api_route = require('./config/routes/bookUrlMap');

// view layers 


// APIs 
app.use('/ws', job_api_route);
app.use('/ws', book_api_route);
// app.use('/ws/test', test_route);
app.use('/', root_route);
app.use('/bookhome', root_route);


// app.use(express.json());


// --------------------------- Error handling ------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
