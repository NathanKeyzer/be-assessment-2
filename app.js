var express = require('express')
var app = express()
var path = require('path')
var db = require('./models/index')
var User = require('./models/users')
var bodyParser = require('body-parser')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

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

app.get('/profiel-aanpassen', function (req, res) {
  res.render('profiel-aanpassen');
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
// post naar de database
app.post('/aanmelden',function(req, res){
  console.log(req.body.gender);
  res.render('aanmelden')

  if (req.body.profielfoto &&
  req.body.firstname &&
  req.body.lastname &&
  req.body.age&&
	req.body.gender&&
	req.body.place&&
	req.body.genderInterest&&
	req.body.email&&
	req.body.password&&
	req.body.passwordConf) {
  var userData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
		gender: req.body.gender,
		woonplaat: req.body.place,
		interesse: req.body.genderInterest,
		email: req.body.email,
		wachtwoord: req.body.password,
    herhaal wachtwoord: req.body.passwordConf,
  }
  //use schema.create to insert data into the db
  User.create(userData, function (err, user) {
    if (err) {
      return next(err)
    } else {
      return res.redirect('/ingelogd');
    }
  });
}
});

// server luisterd op poort 3000
app.listen(3000, function(){
  console.log('Listening on port 3000'); // bericht dat de server is gestart
});
