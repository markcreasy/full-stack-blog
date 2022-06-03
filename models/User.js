const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('../config/connection');

class User extends Model{}

User.init({
  // Model attributes are defined here
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
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
  modelName: 'User', // We need to choose the model name
  freezeTableName: true, // Force table name to be equal to the model name
  timstamps: false // do not generate timestamp fields
});

module.exports = User;
