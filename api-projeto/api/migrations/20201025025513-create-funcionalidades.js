'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('funcionalidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
           projeto_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        references: {
          model: 'projetos',
          key: 'id'
        }
      },
      responsavel_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      sprint_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        references: {
          model: 'sprints',
          key: 'id'
        }
      },
      data_criacao: {
        type: Sequelize.DATE
      },
      data_entrega: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('funcionalidades');
  }
};