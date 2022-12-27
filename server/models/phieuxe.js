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
<<<<<<< HEAD
      Phieuxe.belongsTo(models.Khachhang, { foreignKey: 'khachhangId' });
      Phieuxe.hasMany(models.CT_Phieuxe, { foreignKey: 'phieuxeId' });
    }
  }
  Phieuxe.init({
    soluong: DataTypes.STRING,
    tongtien: DataTypes.STRING,
    trangthai: DataTypes.INTEGER
=======
    }
  }
  Phieuxe.init({
    soluong: DataTypes.INTEGER,
    tongtien: DataTypes.INTEGER,
    tinhtrang: DataTypes.INTEGER
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
  }, {
    sequelize,
    modelName: 'Phieuxe',
  });
  return Phieuxe;
};