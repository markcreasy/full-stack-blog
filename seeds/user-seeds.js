const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// each user will be created with the same (hashed) password
async function seedUsers() {
  // hash the password
  hashedPassword = await bcrypt.hash('pass', 10);
  // create the user data array
  const userData = [
    {
      first_name: 'mark',
      last_name: 'creasy',
      username: 'mark',
      email: 'mail@mail.com',
      password: hashedPassword
    },
    {
      first_name: 'marissa',
      last_name: 'unkel',
      username: 'marissa',
      email: 'mail2@mail.com',
      password: hashedPassword
    },
    {
      first_name: 'emily',
      last_name: 'creasy',
      username: 'emily',
      email: 'mail3@mail.com',
      password: hashedPassword
    }
  ];
  // execute the bulk create
  return User.bulkCreate(userData);
}

module.exports = seedUsers;
