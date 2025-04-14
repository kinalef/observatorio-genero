const express = require('express');
const router = express.Router();
const { obtenerCasos, obtenerPorId,crearCaso,actualizarCaso, eliminarCaso } = require('../controllers/caso.controller');


/**
 * @swagger
 * /api/casos:
 *   get:
 *     summary: Obtener todos los casos con paginación
 *     tags: [Casos]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Cantidad de casos por página
 *     responses:
 *       200:
 *         description: Lista de casos paginados
 *       500:
 *         description: Error al obtener los casos
 */
router.get('/', obtenerCasos);
/**
 * @swagger
 * /api/casos/{id}:
 *   get:
 *     summary: Obtener un caso por ID
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del caso
 *     responses:
 *       200:
 *         description: Caso encontrado
 *       404:
 *         description: Caso no encontrado
 */
router.get('/:id', obtenerPorId);
/**
 * @swagger
 * /api/casos:
 *   post:
 *     summary: Crear un nuevo caso
 *     tags: [Casos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_victima:
 *                 type: string
 *               fecha:
 *                 type: string
 *                 format: date
 *               region:
 *                 type: string
 *               tipo_femicidio:
 *                 type: string
 *             required:
 *               - nombre_victima
 *               - fecha
 *     responses:
 *       201:
 *         description: Caso creado
 *       400:
 *         description: Error en los datos enviados
 */
router.post('/', crearCaso);
/**
 * @swagger
 * /api/casos/{id}:
 *   put:
 *     summary: Actualizar un caso existente
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del caso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_victima:
 *                 type: string
 *               fecha:
 *                 type: string
 *                 format: date
 *               region:
 *                 type: string
 *               tipo_femicidio:
 *                 type: string
 *     responses:
 *       200:
 *         description: Caso actualizado
 *       400:
 *         description: Error al actualizar
 *       404:
 *         description: Caso no encontrado
 */
router.put('/:id', actualizarCaso);

/**
 * @swagger
 * /api/casos/{id}:
 *   delete:
 *     summary: Eliminar un caso
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del caso
 *     responses:
 *       200:
 *         description: Caso eliminado
 *       404:
 *         description: Caso no encontrado
 */
router.delete('/:id',eliminarCaso);

module.exports = router;