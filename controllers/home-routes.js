// Router initialization
const router = require('express').Router();
const isAuthenticated = require('../utils/auth.js');

router.get('/', (req, res) => {
  res.render('home',{
    loggedIn: req.session.loggedIn
  });
})

router.get('/dashboard', isAuthenticated, (req,res) => {
  res.render('dashboard',{loggedIn:req.session.loggedIn});
})

router.get('/login', (req,res) => {
  if(req.session.user) res.render('home')
  else res.render('login',{loggedIn:req.session.loggedIn}) // TODO: handle login failure
})

module.exports = router;
