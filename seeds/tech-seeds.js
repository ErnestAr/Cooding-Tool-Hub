const { Tech } = require('../models');

const techdata = [
  {
    tech_name: 'Anime.js',
    description: 
    "Anime.js (/ˈæn.ə.meɪ/) is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects.",
    source: 'https://animejs.com/',
    saved_count: 0,
    category_id: 1,
    language_id: 3,
    user_id: 1,
  },
  {
    tech_name: 'Django',
    description: 
    "Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern. ",
    source: "https://www.djangoproject.com/",
    saved_count: 0,
    category_id: 4,
    language_id: 4,
    user_id: 2,
  },
  {
    tech_name: 'Bootstrap',
    description: 
    "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development",
    source: "https://getbootstrap.com/",
    saved_count: 0,
    category_id: 3,
    language_id: 2,
    user_id: 1,
  },
  {
    tech_name: 'TailWind CSS',
    description: 
    "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
    source: "https://tailwindcss.com/",
    saved_count: 0,
    category_id: 3,
    language_id: 2,
    user_id: 1,
  },
  {
    tech_name: 'Flask',
    description: 
    "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.",
    source: "https://flask.palletsprojects.com/en/2.0.x/",
    saved_count: 0,
    category_id: 4,
    language_id: 4,
    user_id: 1,
  },
  {
    tech_name: 'Flask',
    description: 
    "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.",
    source: "https://flask.palletsprojects.com/en/2.0.x/",
    saved_count: 0,
    category_id: 4,
    language_id: 4,
    user_id: 1,
  },
  {
    tech_name: 'React',
    description: 
    "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
    source: "https://reactjs.org/",
    saved_count: 0,
    category_id: 3,
    language_id: 3,
    user_id: 2,
  },
  
];


const seedTech = () => Tech.bulkCreate(techdata);

module.exports = seedTech;
