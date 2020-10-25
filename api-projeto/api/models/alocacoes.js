'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alocacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      alocacoes.belongsTo(models.usuarios, {
        foreignKey: 'membro_id'
      }),
      alocacoes.belongsTo(models.projetos, {
        foreignKey: 'projeto_id'
      })
    }
  };
  alocacoes.init({
  }, {
    sequelize,
    modelName: 'alocacoes',
  });
  return alocacoes;
};