const User = require('./User');
const Tech = require('./Tech');
const Category = require('./Category');
const userTech = require('./userTech');
const Language = require('./Language');

Tech.belongsTo(Category, {
  foreingKey: 'category_id'
})

Category.hasMany(Tech, {
  foreingKey: 'category_id'
})

Tech.belongsTo(Language, {
  foreingKey: 'primarylanguage_id'
})

Language.hasMany(Tech, {
  foreingKey: 'primarylanguage_id'
})

User.belongsToMany(Tech, {
  through: {
    model: userTech
  },
  as: "tech",
});

Tech.belongsToMany(User, {
  through: {
    model: userTech
  },
  as: "user",
})

User.hasMany(Tech, {
  foreignKey: 'user_id',
});

Tech.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Tech, Category };


