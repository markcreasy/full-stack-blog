// Router initialization
const router = require('express').Router();
const {User} = require('../../models');

router.get('/', (req,res) => {
  User.findAll().then( userData => {
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

module.exports = router;
