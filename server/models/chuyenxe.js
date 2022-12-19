'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chuyenxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chuyenxe.init({
    motachinhsach: DataTypes.STRING,
    giave: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chuyenxe',
  });
  return Chuyenxe;
};