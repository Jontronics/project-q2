const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js');
const app = express();

passport.use(new GoogleStrategy({
      clientID: keys.googleClientID, 
      clientSecrete: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
      console.log('<-------------------------accessToken',accessToken);
      console.log('<-------------------------refreshToken',refreshToken);
      console.log('<-------------------------profile',profile);

    }
  )
);

// route handle

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
 })
);

// route handler two 

app.get('/auth/google/callback', passport.authenticate('google'));


// app.get('/', (req, res) => {
//   res.send({ hi: 'there for real?' });
// });  test route

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// 

