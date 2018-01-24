const passport = require('passport');

module.exports = (app) => {
  // route handle one
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
   })
  );
  // route handler two 
  app.get('/auth/google/callback', passport.authenticate('google'));
}