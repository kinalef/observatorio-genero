'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LogActividads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      endpoint: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LogActividads');
  }
};