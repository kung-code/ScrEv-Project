'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcionalidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      funcionalidades.belongsTo(models.projetos, {
        foreignKey: 'projeto_id'
      }),
      funcionalidades.belongsTo(models.usuarios, {
        foreignKey: 'responsavel_id'
      }),
      funcionalidades.belongsTo(models.sprints, {
        foreignKey: 'sprint_id'
      });
    }
  };
  funcionalidades.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    data_criacao: DataTypes.DATE,
    data_entrega: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'funcionalidades',
  });
  return funcionalidades;
};