'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhaxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nhaxe.init({
    tennhaxe: DataTypes.STRING,
    sdth: DataTypes.STRING,
    hinhanh: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nhaxe',
  });
  return Nhaxe;
};