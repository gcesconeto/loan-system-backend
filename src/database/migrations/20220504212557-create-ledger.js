'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ledger', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loanId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'loans',
          key: 'id',
        },
      },
      settlementId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'settlements',
          key: 'id',
        },
      },
      date: {
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.FLOAT
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ledger');
  }
};