
// backend/api/middlewares/verificarRol.middleware.js

module.exports = (rolesPermitidos = []) => {
  return async (req, res, next) => {
    try {
      if (!req.usuario) {
        return res.status(401).json({ error: 'No autenticado' });
      }

      if (!rolesPermitidos.includes(req.usuario.rol)) {
        return res.status(403).json({ error: 'Permiso denegado: rol insuficiente' });
      }

      next();
    } catch (error) {
      console.error('Error al verificar rol:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
};
