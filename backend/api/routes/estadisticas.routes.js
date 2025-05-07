const express = require('express');
const router = express.Router();
const { calcularEstadisticasGlobales } = require('../controllers/estadisticas.controller');

// Ruta  para estadísticas globales (sin autenticación)
/**
 * @swagger
 * /api/estadisticas/globales:
 *   get:
 *     summary: Obtener estadísticas agregadas de femicidios
 *     tags: [Estadísticas]
 *     security: []
 *     responses:
 *       200:
 *         description: Estadísticas generales calculadas a partir de la base de datos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_femicidios:
 *                   type: integer
 *                   example: 855
 *                 distribucion_edad:
 *                   type: object
 *                   properties:
 *                     promedio:
 *                       type: number
 *                       format: float
 *                       example: 33.5
 *                     menores_de_edad:
 *                       type: integer
 *                       example: 78
 *                     rango_25_35:
 *                       type: integer
 *                       example: 210
 *                 relacion_agresor:
 *                   type: object
 *                   additionalProperties:
 *                     type: integer
 *                   example:
 *                     Pareja: 432
 *                     Ex Pareja: 189
 *                     Desconocido: 45
 *                 casos_por_region:
 *                   type: object
 *                   additionalProperties:
 *                     type: integer
 *                   example:
 *                     Metropolitana: 213
 *                     Valparaíso: 122
 *                     Biobío: 87
 *                 casos_por_anio:
 *                   type: object
 *                   additionalProperties:
 *                     type: integer
 *                   example:
 *                     2018: 88
 *                     2019: 102
 *                     2020: 94
 *                 casos_por_region_y_anio:
 *                   type: object
 *                   additionalProperties:
 *                     type: object
 *                     additionalProperties:
 *                       type: integer
 *                   example:
 *                     Metropolitana:
 *                       2018: 45
 *                       2019: 52
 *                     Valparaíso:
 *                       2019: 34
 *                       2020: 40
 */
router.get('/globales', calcularEstadisticasGlobales);

module.exports = router;