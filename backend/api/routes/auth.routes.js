// api/routes/auth.routes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { Usuario, LogActividad } = require('../../shared/models');

// Inicia login con Google
/**
 * @swagger
 * /api/auth/google:
 *   get:
 *     summary: Inicia el proceso de autenticación con Google
 *     tags: [Auth]
 *     security: []
 *     description: |
 *       ⚠️ Esta ruta redirige a Google para autenticación y **no puede probarse desde Swagger**.
 *       
 *       Para probarla:
 *       1. Abre la URL en tu navegador
 *       2. Inicia sesión con tu cuenta de Google
 *       3. Copia el token recibido
 *       4. Pégalo en Swagger usando el botón "Authorize"
 *     responses:
 *       302:
 *         description: Redirección al login de Google
 */
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


// Callback de Google

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', { session: false }, async (err, user, info) => {
    if (err) {
      console.error('Error de autenticación en callback:', err);
      return res.status(500).json({ mensaje: 'Error interno en autenticación', error: err });
    }

    if (!user) {
      console.error('No se recibió usuario desde Google:', info);
      return res.status(401).json({ mensaje: 'Autenticación fallida', detalle: info });
    }

    try {
      const perfil = user.usuario;  // Ajusta según cómo estés pasando el perfil

      // Buscar usuario o crear
      let usuario = await Usuario.findOne({ where: { id_google: perfil.id } });

      if (!usuario) {
        usuario = await Usuario.create({
          id_google: perfil.id,
          nombre: perfil.nombre,
          email: perfil.email,
          foto: perfil.foto,
          ultima_conexion: new Date()
        });
      } else {
        usuario.ultima_conexion = new Date();
        await usuario.save();
      }

      await LogActividad.create({
        usuario_id: usuario.id,
        tipo: 'login',
        endpoint: '/api/auth/google/callback',
        fecha: new Date()
      });

      const accessToken = jwt.sign(
        { id: usuario.id, email: usuario.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      const refreshToken = jwt.sign(
        { id: usuario.id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
      );

      res.json({
        mensaje: 'Autenticación exitosa',
        usuario: {
          //id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email,
          //foto: usuario.foto
        },
        token: accessToken,
        refreshToken: refreshToken
      });

    } catch (catchErr) {
      console.error('Error en flujo de procesamiento post-login:', catchErr);
      return res.status(500).json({ mensaje: 'Error interno en post login', error: catchErr });
    }
  })(req, res, next);
});

// Endpoint para refrescar el token de acceso
router.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: 'No se proporcionó refresh token' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const usuario = await Usuario.findByPk(decoded.id);
    if (!usuario) {
      return res.status(403).json({ error: 'Usuario no encontrado' });
    }

    const nuevoAccessToken = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    return res.json({ token: nuevoAccessToken });
  } catch (err) {
    return res.status(403).json({ error: 'Refresh token inválido o expirado' });
  }
});
module.exports = router;