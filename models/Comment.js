const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id:DataTypes.INET,
    allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  {
    comment_text:DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [1]
      }
  },
  {
    post_id:DataTypes.init,
    references: {
        model: 'post',
        key: 'id'
      }
  },
  {
    user_id:DataTypes.init,
    references: {
        model: 'user',
        key: 'id'
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);











module.exports=Comment;