const { userTech } = require('../models')

const userTech = [
  {
    user_id: 1,
    tech_id: 2
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

const seedUserTech = () => User.bulkCreate(userTech);

module.exports = seedUserTech;