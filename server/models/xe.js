'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Xe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      Xe.belongsTo(models.Chuyenxe, { foreignKey: 'chuyenxeId' });
      Xe.hasMany(models.Hinhanhxe, { foreignKey: 'xeId' });
=======
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
    }
  }
  Xe.init({
    sl_ghe: DataTypes.INTEGER,
    bsx: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Xe',
  });
  return Xe;
};