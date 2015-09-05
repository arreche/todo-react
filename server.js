var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api = require('./api');


var todoServer = express();

// view engine setup
todoServer.set('views', path.join(__dirname, 'views'));
todoServer.set('view engine', 'hjs');

// connect to the Database
mongoose.connect('mongodb://localhost/todoDB', function(err){
  if(err){
    console.log('Database Connection Error: '+err);
  } else {
    console.log('Database Connected');
  }
});

// uncomment after placing your favicon in /public
//todoServer.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
todoServer.use(logger('dev'));
todoServer.use(bodyParser.json());
todoServer.use(bodyParser.urlencoded({ extended: false }));
todoServer.use(cookieParser());
todoServer.use(express.static(path.join(__dirname, 'public')));

todoServer.use('/api', api);

// catch 404 and forward to error handler
todoServer.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (todoServer.get('env') === 'development') {
  todoServer.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
todoServer.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = todoServer;
