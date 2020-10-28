'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alocacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projeto_id: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
        references: {
          model: 'projetos',
          key: 'id'
        }
      },

      membro_id: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alocacoes');
  }
};