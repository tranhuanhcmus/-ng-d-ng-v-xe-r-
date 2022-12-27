'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CT_Phieuxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      CT_Phieuxe.belongsTo(models.Phieuxe, { foreignKey: 'phieuxeId' });
      CT_Phieuxe.belongsTo(models.Chuyenxe, { foreignKey: 'chuyenxeId' });
=======
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
    }
  }
  CT_Phieuxe.init({
    soghe: DataTypes.INTEGER,
    sotang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CT_Phieuxe',
  });
  return CT_Phieuxe;
};