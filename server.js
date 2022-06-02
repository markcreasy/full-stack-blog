// Imports
const express = require('express');
const {engine} =  require('express-handlebars');

// app and port initialization
const app = express();
const port = 3001;

// setup handlebars for view handling
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// setup routes
app.get('/', (req, res) => {
  res.render('home');
})

// start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})