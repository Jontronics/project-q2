const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  })
});

passport.use(new GoogleStrategy({
      clientID: keys.googleClientID, 
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
      // da promise land,, i swear!!
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser){
            // already have that record 
            done(null,existingUser);
          } else {
            // we dont have the new user on record
            new User({ googleId: profile.id})
              .save()  // mongoose model instance
              .then(user => done(null, user));
          }
        });
      
      
      
      console.log('<-------------------------accessToken',accessToken);
      console.log('<-------------------------refreshToken',refreshToken);
      console.log('<-------------------------profile',profile);

    }
  )
);