const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//
// Runtime stuff
//
const port = process.env.PORT || 8080;
const db_password = process.env.DOCKSKID_DB_PASSWORD;
const db_path = config.database.replace('<password>', db_password);;

if(process.env.DOCKSKID_DB_PASSWORD == undefined){
  console.log("The environment variable: DOCKSKID_DB_PASSWORD was not set! Please set it then restart the app.");
  process.exit(0);
}

//
// MongoDB stuff
//
mongoose.Promise = global.Promise;
mongoose.connect(db_path, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function(){
  console.log('Found the database: ' + config.database);
})

mongoose.connection.on('error', function(e){
  console.log('There was a problem connecting to the database: ' + e);
});

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
