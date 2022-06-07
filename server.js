// Imports
const express = require('express');
const {create} = require('express-handlebars')
const routes = require('./controllers');
const session = require('express-session');
const helpers = require('./utils/helpers.js');
const sequelize = require('./config/connection');
require('dotenv').config();

// app and port initialization
const app = express();
const hbs = create({ helpers });

// setup port number
const PORT = process.env.PORT || 3001;

// setup session variables
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 60000 }, // session timeout 1 minute
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// setup session tracking
app.use(session(sess));

// setup handlebars for view handling
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));

// middleware to populate req.body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// add routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Full Stack Blog now listening on port ${PORT}`));
});
