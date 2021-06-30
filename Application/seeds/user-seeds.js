const { User } = require('../models')

const userData = [
  {
    username: 'drez23',
    email: 'drez23@gmail.ca',
    password: '1234567s'
  },
  {
    username: 'ernest55',
    email: 'ernest55@gmail.ca',
    password: '6characterslol'
  },
  {
    username: 'devesh32',
    email: 'devesh32@gmail.ca',
    password: 'devesh2345'
  }
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;