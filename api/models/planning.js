'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class planning extends Model {
    
    static associate(models) {
      planning.belongsTo(models.usuarios, {
        foreignKey: 'membro_id'
      }),

      planning.belongsTo(models.projetos, {
        foreignKey: 'projeto_id'
      }),
      planning.belongsTo(models.sprints, {
        foreignKey: 'sprint_id'
      }),
      planning.belongsTo(models.funcionalidades, {
        foreignKey: 'funcionalidade_id'
      })
    }
  };
  planning.init({
  }, {
    sequelize,
    modelName: 'planning',
  });
  return planning;
};