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
<<<<<<< HEAD
      Nhaxe.hasMany(models.Chuyenxe, { foreignKey: 'nhaxeId' });
      Nhaxe.belongsToMany(models.Benxe, {
        through: 'CT_BenXe_NhaXe',
        foreignKey: 'nhaxeId'
      })
=======
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
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