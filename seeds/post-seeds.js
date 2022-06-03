const { Post } = require('../models');

const postData = [
  {
    title: 'Sample Post 1',
    post_body: 'This is a post about HTML',
    user_id: 1
  },
  {
    title: 'Sample Post 2',
    post_body: 'This is a post about CSS',
    user_id: 1
  },
  {
    title: 'Sample Post 3',
    post_body: 'This is a post about Javascript',
    user_id: 2
  },
  {
    title: 'Sample Post 4',
    post_body: 'This is a post about NodeJS',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
