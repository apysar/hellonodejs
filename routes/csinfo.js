var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('csinfo', { info: 'CS 2' });
});

module.exports = router;