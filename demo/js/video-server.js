const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const manifest = require('./manifest.json')

// Runtime things
const port = 8080

// Middleware
// app.use(function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// });
app.use(bodyParser.json()); // For parsing requests
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application x-form-url-urlencoded

app.get('/', function(req, res) {
  res.json({ error: 'bad episode request'});res
});

app.get('/:ep', function(req, res) {
  console.log("[" + req.ip + "]: requested manifest.");
  ep_num = Number(req.path.split('/')[1])
  if(ep_num === undefined) res.json({ error: 'bad episode request'});
  else {
    ep_data = manifest[ep_num];
    if(ep_data === undefined) res.json({ error: 'no episode data available'});
    else res.json(manifest[ep_num]);
  }
});

app.get('/media/videos/:res', function(req, res) {
  file = req.path;
  console.log("[" + req.ip + "]: requested file: " + file)
  // res.send('lol, no');
});

console.log("Listening on port: " + port);
app.listen(port);
