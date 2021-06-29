const { Tech } = require('../models');

const techdata = [
  {
    name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
  {
    name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
  {
    name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
  {
    name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
  {
    name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
  {
    name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
  {
    name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
  {
    name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
  {
    name: 'Maya',
    description: 
    "Maya is an animation and modeling program used to create three-dimensional ( 3-D ), full-motion effects. Maya incorporates the natural laws of physics to control the behavior of virtual objects in computer animation. Maya can produce videos that are more life-like than has been possible with less sophisticated programs. Versions are available for both IBM-compatible and Macintosh operating systems.",
    project: "Disney Short",
    category_id: 1,
    user_id: 1,
  },
];

const seedTech = () => Tech.bulkCreate(techdata);

module.exports = seedTech;
