// backend/api/middlewares/verificarToken.middleware.js
const jwt = require('jsonwebtoken');
const { Usuario } = require('../../shared/models');

module.exports = async (req, res, next) => {
  const header = req.headers['authorization'];

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const token = header.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const usuario = await Usuario.findByPk(decoded.id);

    if (!usuario) {
      return res.status(403).json({ error: 'Usuario no válido' });
    }

    req.usuario = usuario;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};