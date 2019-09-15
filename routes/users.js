const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database')

function censor(censor) {
  var i = 0;

  return function(key, value) {
    if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value)
      return '[Circular]';

    if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      return '[Unknown]';

    ++i; // so we know we aren't using the original object anymore

    return value;
  }
}

function str(data){
  return JSON.stringify(data, censor(data));
}

// Register
router.post('/register', async function(req, res, next){
  res.fast_fail = false;
  let new_user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    privilege: 0,
    is_admin: false
  });

  User.hasUsername(new_user.username, function(has_user){
    if(has_user){ return res.json({success: false, msg: 'Username is already in use!'}); } // Username is NOT unique
    else{ // Username is unique
      User.hasEmail(new_user.email, function(has_email){
        if(has_email){ return res.json({success: false, msg: 'Email is already in use!'}); } // Email is NOT unique
        else{ // Email is unique
          User.addUser(new_user, function(e, user){
            console.log("Attempting to create new user with data:\n\tName: " + req.body.name + "\n\tE-Mail: " + req.body.email + "\n\tUsername: " + req.body.username);
            if(e){  return res.json({success: false, msg: 'Failed to register user: ' + e}); }
            else{   return res.json({success: true, msg: 'User successfully registered.'}); }
          });
        }
      });
    }
  });
});

// Authenticate
router.post('/auth', function(req, res, next){
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, function(e, user){
    if(e){ throw e; }
    if(!user){ return res.json({success: false, msg: 'Username or password was incorrect!'}); }
    User.comparePassword(password, user.password, function(e, is_match){
      if(e){ throw e; }
      if(is_match){
        const token = jwt.sign(user.toJSON(), config.secret, { expiresIn: 86400 });

        res.json({
          success: true,
          token: 'JWT ' + token,
          msg: 'Succesfully logged in!',
          user:{
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      }
      else{ return res.json({success: false, msg: 'Username or password was incorrect!'}); }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), function(req, res){
  res.json({user: req.user});
});

module.exports = router;
