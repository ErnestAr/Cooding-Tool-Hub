const User = require('./User');
const Tech = require('./Tech');
const Category = require('./Category');
const userTech = require('./userTech');

Tech.belongsTo(Category, {
  foreingKey: 'category_id'
})

Category.hasMany(Tech, {
  foreingKey: 'category_id'
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
