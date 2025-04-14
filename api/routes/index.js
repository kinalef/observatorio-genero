const express = require('express');
const router = express.Router();

// Ruta base para probar que el servidor funciona
router.get('/', (req, res) => {
  res.json({ mensaje: 'API del Observatorio de Violencia de Género funcionando 🚀' });
});

module.exports = router;