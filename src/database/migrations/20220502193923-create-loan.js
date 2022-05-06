'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'loans', 
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        clientId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'clients',
            key: 'id',
          },
        },
        amount: {
          type: Sequelize.FLOAT
        },
        startDate: {
          type: Sequelize.DATE
        },
        paymentDate: {
          type: Sequelize.DATE
        },
        rate: {
          type: Sequelize.FLOAT
        },
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('loans');
  }
};