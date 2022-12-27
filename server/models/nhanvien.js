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
<<<<<<< HEAD
      Nhanvien.belongsTo(models.Role, { foreignKey: 'nhanvienId' });
=======
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
    }
  }
  Nhanvien.init({
    luong: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    ngayvl: DataTypes.DATE,
<<<<<<< HEAD
    role: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    accesstoken: DataTypes.STRING,
    email: DataTypes.STRING
=======
    role: DataTypes.STRING
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
  }, {
    sequelize,
    modelName: 'Nhanvien',
  });
  return Nhanvien;
};