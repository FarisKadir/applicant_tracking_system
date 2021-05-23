const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Departments extends Model {}

Departments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'department',
  }
);

module.exports = Departments;