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
      funcionalidades.hasMany(models.planning, {
        foreignKey: 'funcionalidade_id'
      });
    }
  };
  funcionalidades.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    data_criacao: DataTypes.DATE,
    data_entrega: DataTypes.DATE,
    status: DataTypes.INTEGER,
    horas:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'funcionalidades',
  });
  return funcionalidades;
};