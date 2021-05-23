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
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    job_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'job_type',
            key: 'id',
          }
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'department',
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
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'requisition',
  }
);

module.exports = Requisitions;