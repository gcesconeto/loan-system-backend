'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        email: 'admin@gmail.com',
        password: '123456',
      },
    ],
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
