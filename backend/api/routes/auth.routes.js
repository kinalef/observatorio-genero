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

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  async (req, res) => {
    const perfil = req.user.usuario;

    // 1. Buscar por id_google
    let usuario = await Usuario.findOne({ where: { id_google: perfil.id } });

    if (!usuario) {
      // 2. Si el usuario no existe, entonces se crea en la BD como un nuevo registro
      usuario = await Usuario.create({
        id_google: perfil.id,
        nombre: perfil.nombre,
        email: perfil.email,
        foto: perfil.foto,
        ultima_conexion: new Date()
      });
    } else {
      // 3. Si ya existe, se actualiza la última conexión
      usuario.ultima_conexion = new Date();
      await usuario.save();
    }

    // 4. Guardar actividad de login
    await LogActividad.create({
      usuario_id: usuario.id,
      tipo: 'login', //pensar en estandarizar este campo
      endpoint: '/api/auth/google/callback',
      fecha: new Date()
    });

    // 5. Generar token con id interno
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // 6. Enviar respuesta
    res.json({
      mensaje: 'Autenticación exitosa',
      usuario: {
       // id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        //foto: usuario.foto
      },
      token
    });
  }
);
module.exports = router;