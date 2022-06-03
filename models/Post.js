const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  post_body: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    refrences: {
      model: 'user',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'post',
  freezeTableName: true,
  timestamps: true
});

module.exports = Post;
