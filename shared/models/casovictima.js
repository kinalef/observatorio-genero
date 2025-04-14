'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CasoVictima extends Model {
    static associate(models) {
      CasoVictima.belongsTo(models.FuenteDato, {
        foreignKey: 'fuenteId',
        as: 'fuente',
      });
    }
  }
  CasoVictima.init(
    {
      fecha: DataTypes.DATE,
      nombre_victima: DataTypes.STRING,
      edad_victima: DataTypes.STRING,
      region: DataTypes.STRING,
      comuna: DataTypes.STRING,
      tipificacion_red_chilena: DataTypes.STRING,
      relacion_agresor: DataTypes.STRING,
      suicidio_agresor: DataTypes.BOOLEAN,
      nacionalidad_victima: DataTypes.STRING,
      ocupacion_victima: DataTypes.STRING,
      informacion_hecho: DataTypes.TEXT,
      forma_agresion: DataTypes.STRING,
      violencia_sexual: DataTypes.BOOLEAN,
      nombre_femicida: DataTypes.STRING,
      edad_femicida: DataTypes.STRING,
      nacionalidad_femicida: DataTypes.STRING,
      ocupacion_femicida: DataTypes.STRING,
      confiesa_delito: DataTypes.BOOLEAN,
      antecedentes: DataTypes.TEXT,
      antecedentes_ley_vif: DataTypes.STRING,
      registrado_sernameg: DataTypes.BOOLEAN,
      tipificacion_penal: DataTypes.STRING,
      tipificacion_adicional: DataTypes.STRING,
      estado_causa: DataTypes.STRING,
      fecha_causa: DataTypes.DATE,
      estado_femicida: DataTypes.STRING,
      tribunal: DataTypes.STRING,
      fiscal: DataTypes.STRING,
      rit: DataTypes.STRING,
      sentencia: DataTypes.STRING,
      sentencia_adicional: DataTypes.STRING,
      info_medios: DataTypes.TEXT,
      info_medios2: DataTypes.TEXT,
      info_medios3: DataTypes.TEXT,
      informe_poder_judicial: DataTypes.TEXT,
      actualizado: DataTypes.DATE,
      fuenteId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CasoVictima',
      tableName: 'casos_victimas',
      timestamps: true,
    }
  );
  return CasoVictima;
};