// Router initialization
const router = require('express').Router();
const {User} = require('../../models');

router.get('/', (req,res) => {
  User.findAll({
    attributes: {exclude: ['password']}
  }).then( userData => {
    if(!userData){
      res.json({message:"no user data"});
      return;
    }

    res.json(userData);
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

router.post('/', (req,res) => {
  User.create({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }).then( success => {
    if(success){
      res.status(200).json({message: "Successfully created new user"});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
});

router.get('/logout', (req,res) => {
  // logout logic

  // clear the user from the session object and save.
  // this will ensure that re-using the old session id
  // does not have a logged in user
  req.session.user = null
  req.session.save(function (err) {
    if (err) next(err)

    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
    req.session.regenerate(function (err) {
      if (err) next(err)
      // res.redirect('/')
      res.status(200).json({message:"user logged out"});
    })
  })
})

router.get('/check-auth', (req, res) => {
  if(!req.session.user){
    res.status(200).json({message:"no authenticated user"});
  }else{
    res.status(200).json({message:req.session.user});
  }
})

router.post('/login', (req,res) => {
  User.count({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  }).then(success => {
    if(success){
      // regenerate the session, which is good practice to help
      // guard against forms of session fixation
      req.session.regenerate(function (err) {
        if (err) next(err);

        // store user information in session, typically a user id
        req.session.user = req.body.username;

        // save the session before redirection to ensure page
        // load does not happen before session is saved
        req.session.save(function (err) {
          if (err) return next(err);
          // res.redirect('/');
          res.status(200).json({message:"login successful"});
        })
      })
    }else{
      res.status(400).json({message:"login failed"});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
});

router.put('/:id', (req,res) => {
  User.update({
    first_name: req.body.firstname,
    last_name: req.body.lastname
  },{
    where: {
      id: req.params.id
    }
  })
  .then( (success) => {
    if(success[0]){
      res.status(200).json({message: "Successfully updated user"});
    }else{
      res.status(400).json({message: "No user for id"});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
});

router.delete('/:id', (req,res) => {
  User.destroy({where: {id:req.params.id}})
    .then(success => {
      if(success){
        res.status(200).json({message:"User deleted"});
      }else{
        res.status(400).json({message:"No user for id"});
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;
