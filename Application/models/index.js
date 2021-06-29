const User = require('./User');
const Tech = require('./Tech');
const Category = require('./Category')

Tech.belongsTo(Category, {
  foreingKey: 'category_id'
})

Category.hasMany(Tech, {
  foreingKey: 'category_id'
})

User.belongsToMany(Tech, {
  through: "userTech",
  as: "user",
  foreignKey: "tech_id",
});

Tech.belongsToMany(User, {
  through: "userTech",
  as: "user",
  foreingKey: "tech_id"
})

User.belongsToMany

module.exports = { User, Tech, Category };
