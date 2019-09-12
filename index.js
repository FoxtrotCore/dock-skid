const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//
// MongoDB stuff
//
mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function(){
  console.log('Found the database: ' + config.database);
})

mongoose.connection.on('error', function(e){
  console.log('There was a problem connecting to the database: ' + e);
});

//
// Runtime stuff
//
const port = process.env.PORT || 8080;

//
// App + CORS stuff
//
const app = express();
const users = require('./routes/users');
app.use(cors());

//
// Middleware
//
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//
// User routing
//
app.use('/u', users);
app.use('/user', users);

//
// Start the app
//
app.get('/', function(req, res){
  res.send('Invalid endpoint!');
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function(){
  console.log("Server started on port: " + port);
});
