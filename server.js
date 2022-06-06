// Imports
const express = require('express');
const {create} = require('express-handlebars')
const routes = require('./controllers');
const session = require('express-session');
const helpers = require('./utils/helpers.js');
require('dotenv').config();

// app and port initialization
const app = express();
const hbs = create({ helpers });
const port = 3001;

// setup handlebars for view handling
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));

// session setup
// TODO: implement dotenv config for session secret
var sess = {
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 60000 }, // session timeout 1 minute
  resave: false,
  saveUninitialized: true,
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess));

// middleware to populate req.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// add routes
app.use(routes);

// start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
