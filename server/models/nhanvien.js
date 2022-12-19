'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhanvien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nhanvien.init({
    luong: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    ngayvl: DataTypes.DATE,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nhanvien',
  });
  return Nhanvien;
};