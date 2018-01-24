const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); // refactor
require('./services/passport'); //refactor


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // refactor


// app.get('/', (req, res) => {
//   res.send({ hi: 'there for real?' });
// });  test route

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// 

