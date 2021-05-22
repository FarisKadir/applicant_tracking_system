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
    requisition_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'requisitions',
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
    freezeTableName: true,
    underscored: true,
    modelName: 'submissions',
  }
);

module.exports = Submissions;