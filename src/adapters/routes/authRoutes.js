const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

module.exports = (signInUseCase) => {
  const router = Router();
  const controller = new AuthController(signInUseCase);

  /**
   * @swagger
   * tags:
   *   name: Authentication
   *   description: Endpoints de autenticación
   */

  /**
   * @swagger
   * /api/v1/auth/signin:
   *   post:
   *     summary: Iniciar sesión
   *     tags: [Authentication]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/LoginRequest'
   *     responses:
   *       200:
   *         description: Login exitoso
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/AuthResponse'
   *       401:
   *         description: Credenciales inválidas
   */
  router.post('/signin', controller.signIn.bind(controller));

  return router;
};
