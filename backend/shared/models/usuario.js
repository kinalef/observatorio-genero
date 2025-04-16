'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.LogActividad, {
        foreignKey: 'usuario_id',
        as: 'actividades'
      });
    }
  }
  Usuario.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_google: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rol: {
      type: DataTypes.ENUM('lector', 'editor', 'admin'),
      allowNull: false,
      defaultValue: 'lector'
    },
    ultima_conexion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: true,
  });

  return Usuario;
};