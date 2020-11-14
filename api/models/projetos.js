'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projetos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      projetos.hasMany(models.alocacoes, {
        foreignKey: 'projeto_id'
      }),
      projetos.hasMany(models.planning, {
        foreignKey: 'projeto_id'
      }),
      projetos.hasMany(models.funcionalidades, {
        foreignKey:'projeto_id'
      }),
      projetos.hasMany(models.sprints, {
        foreignKey: 'projeto_id'
      }),
      projetos.belongsTo(models.usuarios, {
        foreignKey: 'product_owner_id'
      })
    }
  };
  projetos.init({
    descricao: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'projetos',
  });
  return projetos;
};