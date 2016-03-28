// 因学习原因，先注释掉这段.
/*var express = require('express');
var router = express.Router();

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'nblogs' });
});

module.exports = router;*/


module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'nblogs' });
  });
  app.get('/hello', function (req, res) {
  res.send('hello,world!');
  });
};