var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('article', {
    title: `Express内页，欢迎您的访问`
  });
});

module.exports = router;
