'use strict';

import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Author, {
        foreignKey: 'authorId',
        as: 'author'
      });
    }
  }

  Book.init({
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });

  return Book;
};