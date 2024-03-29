const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This is a comment",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'This article is educational',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'This article is sad',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'This article is fake news',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'This article is woke',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'This article is silly',
    user_id: 3,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
