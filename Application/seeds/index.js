const sequelize = require('../config/connection');
const seedCategory = require('./category-seeds');
const seedTech = require('./tech-seeds');
const seedUser = require('./user-seeds')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedTech();

  await seedUser();

  process.exit(0);
};

seedAll();
