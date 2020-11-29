'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sprints extends Model {
    static associate(models) {
      sprints.hasMany(models.planning, {
        foreignKey: 'sprint_id'
      }),
      sprints.belongsTo(models.projetos, {
        foreignKey: 'projeto_id'
      }),
      sprints.belongsTo(models.funcionalidades, {
        foreignKey: 'funcionalidade_id'
      })
  }
  };
  sprints.init({
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    descricao: DataTypes.TEXT,
    horas:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sprints',
  });

  return sprints;
};