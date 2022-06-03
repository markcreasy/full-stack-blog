// Router initialization
const router = require('express').Router();
const {Comment, Post, User} = require('../../models');

router.get('/',(req,res) => {
  Comment.findAll({
    include: [
      {model:User},
      {model:Post}
    ]
  })
  .then( commentData => {
    if(!commentData){
      res.status(400).json({message:"no comment data"});
    }else{
      res.status(200).json(commentData);
    }
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

router.post('/',(req,res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    post_id: req.body.post_id,
    // need to update via session data
    user_id: 1
    // need to add validations for comment text length
  }).then(success => {
    if(success){
      res.status(200).json({message:"new comment created"});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
})

router.put('/:id',(req,res) => {
  Comment.update({
    comment_text: req.body.comment_text
  },{
    where: { id : req.params.id }
  }).then(success => {
    if(success[0]){
      res.status(200).json({message:"comment updated"});
    }else{
      res.status(400).json({message:"no comment for id"});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
})

router.delete('/:id',(req,res) => {
  Comment.destroy({
    where: {id: req.params.id}
  }).then(success => {
    if(success){
      res.status(200).json({message:"comment deleted"});
    }else{
      res.status(400).json({message:"no comment for id"});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
})

module.exports = router;
