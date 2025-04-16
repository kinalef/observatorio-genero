'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LogActividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LogActividad.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'usuario'
      });
    }
  }
  LogActividad.init({
    usuario_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endpoint: DataTypes.STRING,
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'LogActividad',
    timestamps: false
  });
  return LogActividad;
};

