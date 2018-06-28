var express = require('express')
var app = express()
var path = require('path')
var multer = require ('multer')
var upload = multer({dest: 'static/upload/'})
var db = require('./models/index')
var User = require('./models/users')
var bodyParser = require('body-parser')
var dotenv = require('dotenv').config();
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

app.get('/login', function(req, res){
	res.render('login');
});

//profielfoto uploaden


// post naar de database
app.post('/aanmelden',function(req, res, next){
  console.log(req.body.gender);
  // res.render('aanmelden')

  if (req.body.firstname &&
	req.body.lastname &&
  req.body.age&&
	req.body.gender&&
	req.body.place&&
	req.body.genderInterest&&
	req.body.email&&
	req.body.password&&
	req.body.passwordConf) {
		console.log('create user');
  var userData = {
		profielfoto: req.body.profielfoto,
		naam: req.body.firstname,
    achternaam: req.body.lastname,
    leeftijd: req.body.age,
		geslacht: req.body.gender,
		woonplaats: req.body.place,
		interesse: req.body.genderInterest,
		email: req.body.email,
		wachtwoord: req.body.password,
    herhaalWachtwoord: req.body.passwordConf,
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
// login setup
app.post('/login', function(req, res){
	var firstname = req.body.firstname;
	var password = req.body.password;

	User.findOne({naam: firstname, wachtwoord: password}, function(err, user) {
			if(err){
				console.log(err);
				return res.status(500).send();
			}

			if(!user){
				return res.status(404).send();
			}

			// return res.status(200).send();
			return res.redirect('/ingelogd')
	})
});

//logout
app.get('/logout',function(req, res){

	res.redirect('/');
});

// server luisterd op poort 3000
app.listen(3000, function(){
  console.log('Listening on port 3000'); // bericht dat de server is gestart
});
