// Router initialization
const router = require('express').Router();
const isAuthenticated = require('../utils/auth.js');
const { Post, User, Comment } = require('../models/');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  Post.findAll(
    {
      attributes: [
        'id',
        'title',
        'post_body',
        'user_id',
        'createdAt',
        'updatedAt',
        [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
      ],
      include: [
        {
          model: User,
          attributes: ['id','first_name','last_name','username','email']
        },
      ]
    }
  )
    .then(data => {
      // convert data to array
      const postData = data.map(post => post.get({ plain: true }));
      // render home with session data and post data
      res.render('home',{
        loggedIn: req.session.loggedIn,
        posts: postData
      });
    })
})

router.get('/post/:id', (req,res) => {
  Post.findOne(
    {
      where:{id:req.params.id},
      include:{
        model: Comment,
        include: User
      }
    }
  ).then(data => {
      // convert data to array
      const postData = data.get({ plain: true });
      console.log(postData);
      res.render('single-post',{
        loggedIn: req.session.loggedIn,
        post: postData
      })
    })
})

router.get('/dashboard', isAuthenticated, (req,res) => {
  res.render('dashboard',{loggedIn:req.session.loggedIn});
})

router.get('/login', (req,res) => {
  if(req.session.user) res.render('home')
  else res.render('login',{loggedIn:req.session.loggedIn}) // TODO: handle login failure
})

module.exports = router;
