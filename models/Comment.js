const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init({
  // Model Attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  comment_text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    refrences: {
      model: 'user',
      key: 'id'
    }
  },
  post_id: {
    type: DataTypes.INTEGER,
    refrences: {
      model: 'post',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'comment',
  timestamps: true,
  freezeTableName: true
});

module.exports = Comment;
