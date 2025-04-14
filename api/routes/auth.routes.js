// api/routes/auth.routes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Inicia login con Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback de Google
router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // El JWT ya viene en req.user.token
    res.json({
      mensaje: 'Autenticación exitosa',
      usuario: req.user.usuario,
      token: req.user.token
    });
  }
);

module.exports = router;