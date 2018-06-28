var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

  naam: {
    type: String,
    required: true,
  },
  achternaam: {
    type: String,
    required: true,
  },
  leeftijd: {
    type: Number,
    required: true,
  },
  geslacht: {
    type: String,
    required: true,
  },
  woonplaats: {
    type: String,
    required: true,
  },
  interesse:{
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  wachtwoord: {
    type: String,
    required: true,
  },
  herhaalWachtwoord: {
    type: String,
    required: true,
  }
});
//hash the password
// var noop = function() {};
//
// userSchema.pre('save', function(done){
//   var user = this;
//   if(!user.isModified('password')){
//     return done();
//   }
//   bcrypt.genSalt (SALT_FACTOR, function(err, salt) {
//     if(err) {return done(err); }
//     bcrypt.hash(user.password, salt, noop,
//     function(err, hashedPassword){
//       if (err){ return done(err); }
//       user.password = hashedPassword;
//       done();
//     });
//   });
// });
// end of hash

var User = mongoose.model('User', UserSchema);
module.exports = User;
