'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sprints extends Model {
    static associate(models) {
      sprints.hasMany(models.funcionalidades, {
        foreignKey: 'sprint_id'
      }),
      sprints.hasMany(models.planning, {
        foreignKey: 'sprint_id'
      }),
      sprints.belongsTo(models.projetos, {
        foreignKey: 'projeto_id'
      })
  }
  };
  sprints.init({
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'sprints',
  });

  return sprints;
};