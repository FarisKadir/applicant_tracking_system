const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Requisitions extends Model {}

Requisitions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsibilities: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    requiredQualifications: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    preferredQualifications: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salaryRange: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'departments',
            key: 'id',
          }
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    job_type_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'job_types',
            key: 'id',
          }
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'requisitions',
  }
);

module.exports = Requisitions;