var express = require('express')
var app = express()
var path = require('path')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function(){
  console.log('Listening on port 3000');
})
