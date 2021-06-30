const { Tech } = require('../models');

const techdata = [
  {
    tech_name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
  {
    tech_name: 'MySQL',
    description: 
    "MySQL is an Oracle-backed open source relational database management system (RDBMS) based on Structured Query Language (SQL).",
    project: "E-Commerce Website",
    category_id: 4,
    user_id: 2,
  },
  {
    tech_name: 'Bootstrap',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
];

const seedTech = () => Tech.bulkCreate(techdata);

module.exports = seedTech;
