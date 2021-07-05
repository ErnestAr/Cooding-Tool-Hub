const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

// const hbhelper = require('handlebars')

// hbhelper.registerHelper( "when",function(operand_1, operator, operand_2, options) {
//   var operators = {
//    'eq': function(l,r) { return l == r; },
//    'noteq': function(l,r) { return l != r; },
//    'gt': function(l,r) { return Number(l) > Number(r); },
//    'or': function(l,r) { return l || r; },
//    'and': function(l,r) { return l && r; },
//    '%': function(l,r) { return (l % r) === 0; }
//   }
//   , result = operators[operator](operand_1,operand_2);
//   if (result) return options.fn(this);
//   else  return options.inverse(this);
// });


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
