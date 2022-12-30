'use strict';
<<<<<<< HEAD

=======
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Khachhang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Khachhang.hasMany(models.Phieuxe, { foreignKey: 'khachhangId' });

    }
  }
  Khachhang.init({
    ten: DataTypes.STRING,
    sdt: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Khachhang',
  });
  return Khachhang;
};