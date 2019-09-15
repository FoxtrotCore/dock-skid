const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//
// Website user schema
//
const user_schema = mongoose.Schema({
  name: {
    type: String
  },

  email: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  is_admin: {
    type: Boolean,
    required: false
  }
});

const User = module.exports = mongoose.model('User', user_schema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(new_user, callback){
  bcrypt.genSalt(10, function(e, salt){
    bcrypt.hash(new_user.password, salt, function(e, hash){
      if(e){ throw  e; }
      new_user.password = hash;
      new_user.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidate_password, hash, callback){
  bcrypt.compare(candidate_password, hash, function(e, is_match){
    if(e){ throw e; }
    callback(null, is_match);
  });
}
