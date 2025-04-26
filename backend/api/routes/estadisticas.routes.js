const express = require('express');
const router = express.Router();
const { calcularEstadisticasGlobales } = require('../controllers/estadisticas.controller');
const verificarToken = require('../middlewares/verificarToken.middleware');


// Ruta protegida para estadísticas globales
/**
 * @swagger
 * /api/estadisticas/globales:
 *   get:
 *     summary: Obtener estadísticas agregadas de femicidios
 *     tags: [Estadísticas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Estadísticas generales calculadas a partir de la base de datos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalFemicidios:
 *                   type: integer
 *                   example: 855
 *                 promedioEdad:
 *                   type: number
 *                   format: float
 *                   example: 33.5
 *                 menoresDeEdad:
 *                   type: integer
 *                   example: 78
 *                 rangoEtarioMasAfectado:
 *                   type: string
 *                   example: "25-35"
 *                 relacionConAgresor:
 *                   type: object
 *                   properties:
 *                     pareja:
 *                       type: integer
 *                       example: 432
 *                     expareja:
 *                       type: integer
 *                       example: 189
 *                     familiar:
 *                       type: integer
 *                       example: 88
 *                     desconocido:
 *                       type: integer
 *                       example: 45
 *                 porRegion:
 *                   type: object
 *                   additionalProperties:
 *                     type: integer
 *                   example:
 *                     Metropolitana: 213
 *                     Valparaíso: 122
 *                     Biobío: 87
 *                 evolucionAnual:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       año:
 *                         type: integer
 *                         example: 2020
 *                       cantidad:
 *                         type: integer
 *                         example: 45
 */
router.get('/globales', verificarToken, calcularEstadisticasGlobales);

module.exports = router;