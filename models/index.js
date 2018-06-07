var mongoose = require('mongoose')
var url = 'mongodb://admin:Geheim1@ds147440.mlab.com:47440/datingusers'

mongoose.connect(url);
var db = mongoose.connection

db.on('connected', function () {
  console.log('Mongoose default connection open to ' + url);
});
