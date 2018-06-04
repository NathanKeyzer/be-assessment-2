var express = require('express')
var app = express()
var path = require('path')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/aanmelden', function (req, res) {
  res.render('aanmelden');
});

app.get('/ingelogd', function (req, res) {
  res.render('ingelogd');
});

app.get('/profiel', function (req, res) {
  res.render('profiel');
});

app.get('/berichten', function (req, res) {
  res.render('berichten');
});

app.get('/matches', function (req, res) {
  res.render('matches');
});

app.get('/match', function (req, res) {
  res.render('match');
});

// server luisterd op poort 3000
app.listen(3000, function(){
  console.log('Listening on port 3000'); // bericht dat de server is gestart
});
