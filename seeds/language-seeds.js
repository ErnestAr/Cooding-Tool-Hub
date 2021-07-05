const  Language = require('../Application/models/Language');

const Languagedata = [
  {
    language_name: 'CSS',
    language_image: '/images/logos_css-3.png'
  },
  {
    language_name: 'HTML',
    language_image: '/images/logos_html-5.png'
  },
  {
    language_name: 'JavaScript',
    language_image: '/images/vscode-icons_file-type-js-official.png'
  },
  {
    language_name: 'Python 3',
    language_image: '/images/logos_python.png'
  },
]

const seedLanguage = () => Language.bulkCreate(Languagedata);

module.exports = seedLanguage;