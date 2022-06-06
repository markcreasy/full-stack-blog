// Router initialization
const router = require('express').Router();
const {Post,User,Comment} = require('../../models');

router.get('/',(req,res) => {
  Post.findAll({
    include: [
      {model: User},
      {model: Comment}
    ]
  }).then( postData => {
    if(!postData){
      res.status(400).json({message:"no post data"});
    }else{
      res.status(200).json(postData);
    }
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

router.post('/',(req,res) => {
  Post.create({
    title: req.body.title,
    post_body: req.body.post_body,
    user_id: req.session.userid
  }).then(success => {
    if(success){
      res.status(200).json({message:"new post created"});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
})

router.put('/:id',(req,res) => {
  Post.update({
    title: req.body.title,
    post_body: req.body.post_body
  },{
    where: { id : req.params.id }
  }).then(success => {
    if(success[0]){
      res.status(200).json({message:"post updated"});
    }else{
      res.status(400).json({message:"no post for id"});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
})

router.delete('/:id',(req,res) => {
  Post.destroy({
    where: {id: req.params.id}
  }).then(success => {
    if(success){
      res.status(200).json({message:"post deleted"});
    }else{
      res.status(400).json({message:"no post for id"});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
})

module.exports = router;
