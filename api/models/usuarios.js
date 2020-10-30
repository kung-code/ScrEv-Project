'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuarios.hasMany(models.projetos, {
        foreignKey:'product_owner_id'
      }),
      usuarios.hasMany(models.alocacoes, {
        foreignKey: 'membro_id'
      }),
      usuarios.hasMany(models.funcionalidades, {
        foreignKey: 'responsavel_id'
      })
    }
  };
  usuarios.init({
    nome: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    tipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};