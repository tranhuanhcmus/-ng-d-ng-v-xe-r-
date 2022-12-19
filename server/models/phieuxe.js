'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phieuxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phieuxe.init({
    soluong: DataTypes.INTEGER,
    tongtien: DataTypes.INTEGER,
    tinhtrang: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Phieuxe',
  });
  return Phieuxe;
};