const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const passport = require('passport');

/* POST login. */
router.post('/login', function(req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log(err);
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Login failed',
        user: user
      });
    }

    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      console.log(user);
      const token = jwt.sign(JSON.stringify(user[0]), 'your_jwt_secret');

      return res.json({ token });
    });
  })(req, res);
});

module.exports = router;
