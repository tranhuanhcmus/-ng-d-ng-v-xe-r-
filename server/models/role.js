'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      Role.belongsTo(models.Nhanvien, { foreignKey: 'nhanvienId' });

=======
>>>>>>> 57224f4c944fe1a950b0910d382a080f7100b550
    }
  }
  Role.init({
    rolename: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};