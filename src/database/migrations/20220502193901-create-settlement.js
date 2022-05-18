'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'settlements', 
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
        installments: {
          type: Sequelize.INTEGER
        },
        notes: {
          type: Sequelize.STRING
        },
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('settlements');
  }
};