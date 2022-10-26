const express = require('express')
const app = express()
const port = process.env.port || 5000;

app.get('/', (req, res) => {
  res.send('API Running')
})

app.listen(port, () => {
  console.log(`learner's hub server running on port`, port);
})