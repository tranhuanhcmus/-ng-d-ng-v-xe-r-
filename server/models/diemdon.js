'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diemdon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Diemdon.hasMany(models.Thanhpho, { foreignKey: 'thanhphoId' });
    }
  }
  Diemdon.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diemdon',
  });
  return Diemdon;
};