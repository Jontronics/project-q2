const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); // refactor
require('./services/passport'); //refactor


mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); // refactor


// app.get('/', (req, res) => {
//   res.send({ hi: 'there for real?' });
// });  test route

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// 

