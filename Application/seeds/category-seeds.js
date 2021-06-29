const { Category } = require('../models');

const categorydata = [
  {
    category_name: 'Animation',
  },
  {
    category_name: '3D Printing',
  },
  {
    category_name: 'Front end',
  },
  {
    category_name: 'Back end',
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
