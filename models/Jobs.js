const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Jobs extends Model {}

Jobs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    responsibilities: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    requiredQualifications: {
    type: DataTypes.STRING,
    allowNull: true,
    },
    preferredQualifications: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    job_type_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'job_type',
            key: 'id',
          }
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
          model: 'department',
          key: 'id',
        }
    }
    },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'jobs',
  }
);

module.exports = Jobs;