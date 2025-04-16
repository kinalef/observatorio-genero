'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FuenteDato extends Model {
    static associate(models) {
      FuenteDato.hasMany(models.CasoVictima, {
        foreignKey: 'fuenteId',
        as: 'casos',
      });
    }
  }
  FuenteDato.init(
    {
      nombre: DataTypes.STRING,
      url: DataTypes.STRING,
      descripcion: DataTypes.TEXT,
      fecha_procesamiento: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'FuenteDato',
      tableName: 'fuentes_datos',
      timestamps: true,
    }
  );
  return FuenteDato;
};