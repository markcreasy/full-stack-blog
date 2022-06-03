const { User } = require('../models');

const userData = [
  {
    first_name: 'Mark',
    last_name: 'Creasy',
    email: 'mail@mail.com',
    username: 'mcreasy',
    password: 'pass'
  },
  {
    first_name: 'Marissa',
    last_name: 'Unkel',
    email: 'mail2@mail.com',
    username: 'munkel',
    password: 'pass'
  },
  {
    first_name: 'Emily',
    last_name: 'Creasy',
    email: 'mail3@mail.com',
    username: 'ecreasy',
    password: 'pass'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
