var express = require('express');
var router = express.Router();
var usermodel = require('../models/user.model');
var passport = require('../middlewares/passport');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
