const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    external_id_provider: {
      type: DataTypes.STRING,
      defaultValue: 'none provided',
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING,
      defaultValue: 'none provided',
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        defaultValue: 'none provided',
        allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "Please provide a phone number",
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      default: "Please provide an email address",
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: "none on file",
      allowNull: true,
    },  
    city: {
      type: DataTypes.STRING,
      defaultValue: "none on file",
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: "none on file",
      allowNull: true,
    },
    zip: {
      type: DataTypes.STRING,
      defaultValue: "none on file",
      allowNull: true,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id',
      }
    },
    resume_path:  {
      type: DataTypes.STRING,
      defaultValue: "no resume provided",
      allowNull: true
    },
    profile_pic: {
      type: DataTypes.STRING(1234),
      defaultValue: "none provided",
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = Users;
