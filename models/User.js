const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

User.init({
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'user', // We need to choose the model name
  freezeTableName: true, // Force table name to be equal to the model name
  timstamps: false // do not generate timestamp fields
});

module.exports = User;
