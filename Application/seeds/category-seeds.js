const { Category } = require('../models');

const categorydata = [
  {
    category_name: 'Web Animation',
  },
  {
    category_name: 'Web Scraping',
  },
  {
    category_name: 'Front End Frameworks',
  },
  {
    category_name: 'Databases',
  },
  {
    category_name: 'Website Deployement',
  },
  {
    category_name: 'Source Control',
  },
];


const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
