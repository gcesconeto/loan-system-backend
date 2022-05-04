'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        id: 1,
        email: 'admin@gmail.com',
        password: '123456',
      },
    ],
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
