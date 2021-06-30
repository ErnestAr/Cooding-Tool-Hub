const sequelize = require('../config/connection');
const seedCategory = require('./category-seeds');
const seedTech = require('./tech-seeds');
const seedUser = require('./user-seeds')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();
  console.log('CATEGORY SEEDED')

  await seedUser();
  console.log('USERS SEEDED')
  
  await seedTech();
  console.log('TECH SEEDED')

  process.exit(0);
};

seedAll();
