// Imports
const express = require('express');
const {engine} =  require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');

// app and port initialization
const app = express();
const port = 3001;

// setup handlebars for view handling
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// session setup
// TODO: implement dotenv config for session secret
var sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false,
  saveUninitialized: true,
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

// middleware to populate req.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// setup routes
app.get('/', (req, res) => {
  res.render('home');
})

// add routes
app.use(routes);

// start listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
