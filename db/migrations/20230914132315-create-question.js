'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      textQuestion: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      answerQuestion: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      idTheme: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:"Themes", 
          key:"id",
        }, 
        onDelete:'cascade'
        
      },
      questionPrice: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};