const express = require('express');
const app = express();
//message commit -m "intial commit"

app.get('/', (req, res) => {
  
  res.send({ hi: 'there for real?' });
  
  
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);