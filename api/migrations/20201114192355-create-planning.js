'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plannings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      funcionalidade_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        references:{
          model: 'funcionalidades',
          key:'id'
        },
        onDelete: 'CASCADE',
      },
      projeto_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        references: {
          model: 'projetos',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      membro_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      sprint_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        references: {
          model: 'sprints',
          key: 'id'
        },
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('plannings');
  }
};