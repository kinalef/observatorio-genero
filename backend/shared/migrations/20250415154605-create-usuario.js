'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_google: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      rol: {
        type: Sequelize.ENUM('lector', 'editor', 'admin'),
        allowNull: false,
        defaultValue: 'lector'
      },
      ultima_conexion: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Usuarios');
  }
};