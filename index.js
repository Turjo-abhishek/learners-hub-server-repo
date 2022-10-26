const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const premium = require('./data/premium.json');

app.get('/', (req, res) => {
  res.send('API Running')
})
app.get('/courses', (req, res) => {
    res.send(courses)
  });

  app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find( course => course._id === id);
    res.send(selectedCourse);
  })
  
  app.get('/premium/:id', (req, res) => {
    const id = req.params.id;
    const premiumCourse = premium.find( course => course._id === id);
    res.send(premiumCourse);
  })

app.listen(port, () => {
  console.log(`learner's hub server running on port`, port);
})