const { Tech } = require('../models');

const techdata = [
  {
    tech_name: 'Anime.js',
    description: 
    "Anime.js (/ˈæn.ə.meɪ/) is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects.",
    source: 'https://animejs.com/',
    saved_count: 1,
    category_id: 1,
    language_id: 3,
    user_id: 1,
  },
  {
    tech_name: 'Django',
    description: 
    "Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern. ",
    source: "https://www.djangoproject.com/",
    saved_count: 1,
    category_id: 4,
    language_id: 4,
    user_id: 2,
  },
  {
    tech_name: 'Bootstrap',
    description: 
    "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development",
    source: "https://getbootstrap.com/",
    saved_count: 5,
    category_id: 3,
    language_id: 2,
    user_id: 1,
  },
  {
    tech_name: 'TailWind CSS',
    description: 
    "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
    source: "https://tailwindcss.com/",
    saved_count: 6,
    category_id: 3,
    language_id: 2,
    user_id: 1,
  },
];

const seedTech = () => Tech.bulkCreate(techdata);

module.exports = seedTech;
