const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class userTech extends Model {}

userTech.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    tech_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tech',
        key: 'id'
      }
    },
    saved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'userTech',
    timestamps: false
  }
);

module.exports = userTech;


