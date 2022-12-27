'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Benxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      Benxe.belongsToMany(models.Nhaxe, {
        through: 'CT_BenXe_NhaXe',
        foreignKey: 'benxeId'
      })
      Benxe.belongsTo(models.Thanhpho, { foreignKey: 'thanhphoId' });
=======
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
    }
  }
  Benxe.init({
    tenbenxe: DataTypes.STRING,
    sdth: DataTypes.STRING,
    diachi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Benxe',
  });
  return Benxe;
};