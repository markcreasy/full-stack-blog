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

module.exports = router;
