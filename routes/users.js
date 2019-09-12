const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database')

// Register
router.post('/register', function(req, res, next){
  console.log("Creating new user with data:\n\tName: " + req.body.name + "\n\tE-Mail: " + req.body.email + "\n\tUsername: " + req.body.username);

  let new_user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.addUser(new_user, function(e, user){
    if(e){ res.json({success: false, msg: 'Failed to register user.'}); }
    else{ res.json({success: true, msg: 'User successfully registered.'}); }
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
