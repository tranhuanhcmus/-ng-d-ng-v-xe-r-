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
<<<<<<< HEAD
      Chuyenxe.hasMany(models.Phieuxe, { foreignKey: 'chuyenxeId' });
      Chuyenxe.hasMany(models.CT_Chuyenxe, { foreignKey: 'chuyenxeId' });
      Chuyenxe.hasMany(models.Xe, { foreignKey: 'chuyenxeId' });
      Chuyenxe.belongsTo(models.Nhaxe, { foreignKey: 'nhaxeId' });

      Chuyenxe.hasMany(models.Thanhpho, { foreignKey: 'thanhphodiId' });
      Chuyenxe.hasMany(models.Thanhpho, { foreignKey: 'thanhphodenId' });
      Chuyenxe.hasMany(models.Chuyenxe, { foreignKey: 'chuyenxeId' });
    }
  }
  Chuyenxe.init({
    mota: DataTypes.STRING,
=======
    }
  }
  Chuyenxe.init({
    motachinhsach: DataTypes.STRING,
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
    giave: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chuyenxe',
  });
  return Chuyenxe;
};