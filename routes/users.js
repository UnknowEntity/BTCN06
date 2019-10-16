var express = require('express');
var router = express.Router();
var usermodel = require('../models/user.model');
var passport = require('../middlewares/passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user profile. */
router.get('/profile', function(req, res, next) {
  res.send(req.user);
});

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', (req, res, next) => {
  var entity = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  console.log(entity);
  usermodel
    .add(entity)
    .then(n => {
      res.redirect('/user/login');
    })
    .catch(next);
});

router.get('/login', (req, res, next) => {
  res.render('login');
});

// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) return next(err);

//     if (!user) {
//       return res.render('error', { error: err });
//     }

//     req.logIn(user, err => {
//       if (err) return next(err);
//       console.log(user);
//       return res.redirect('/me');
//     });
//   })(req, res, next);
// });

module.exports = router;
