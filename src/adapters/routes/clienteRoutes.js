const express = require('express');
const router = express.Router();

module.exports = (clienteController) => {
  /**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gestión de productos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
  router.get('/', (req, res) => clienteController.getAll(req, res));
  router.post('/', (req, res) => clienteController.create(req, res));

  return router;
};