'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('casos_victimas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: Sequelize.DATE,
      nombre_victima: Sequelize.STRING,
      edad_victima: Sequelize.STRING,
      region: Sequelize.STRING,
      comuna: Sequelize.STRING,
      tipificacion_red_chilena: Sequelize.STRING,
      relacion_agresor: Sequelize.STRING,
      suicidio_agresor: Sequelize.BOOLEAN,
      nacionalidad_victima: Sequelize.STRING,
      ocupacion_victima: Sequelize.STRING,
      informacion_hecho: Sequelize.TEXT,
      forma_agresion: Sequelize.STRING,
      violencia_sexual: Sequelize.BOOLEAN,
      nombre_femicida: Sequelize.STRING,
      edad_femicida: Sequelize.STRING,
      nacionalidad_femicida: Sequelize.STRING,
      ocupacion_femicida: Sequelize.STRING,
      confiesa_delito: Sequelize.BOOLEAN,
      antecedentes: Sequelize.TEXT,
      antecedentes_ley_vif: Sequelize.STRING,
      registrado_sernameg: Sequelize.BOOLEAN,
      tipificacion_penal: Sequelize.STRING,
      tipificacion_adicional: Sequelize.STRING,
      estado_causa: Sequelize.STRING,
      fecha_causa: Sequelize.DATE,
      estado_femicida: Sequelize.STRING,
      tribunal: Sequelize.STRING,
      fiscal: Sequelize.STRING,
      rit: Sequelize.STRING,
      sentencia: Sequelize.STRING,
      sentencia_adicional: Sequelize.STRING,
      info_medios: Sequelize.TEXT,
      info_medios2: Sequelize.TEXT,
      info_medios3: Sequelize.TEXT,
      informe_poder_judicial: Sequelize.TEXT,
      actualizado: Sequelize.DATE,
      fuenteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'fuentes_datos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('casos_victimas');
  }
};