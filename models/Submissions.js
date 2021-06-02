const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Submissions extends Model {}

Submissions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'jobs',
            key: 'id',
          }
      }
    },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'submissions',
  }
);

module.exports = Submissions;