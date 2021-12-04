'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Author }) {
      this.belongsTo(Author)
    }
  };
  Book.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    AuthorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Author',
        key: 'id'
      },
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
