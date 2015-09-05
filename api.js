var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();



router.get('/', function(req, res, next) {
  var titleString  =  "TodoAPI"
  res.render('api', { title: titleString});
});



module.exports = router;
