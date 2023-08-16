/**
 * @swagger
 * components:
 *   schemas:
 *     Notifications:
 *       type: object
 *       properties:
 *         property:
 *           type: string
 *           description: Identificador de la propiedad relacionada con la notificación.
 *         title:
 *           type: string
 *           description: Título de la notificación.
 *         message:
 *           type: string
 *           description: Mensaje de la notificación.
 *         share:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: Lista de identificadores UUID de usuarios con quienes compartir la notificación.
 */

/**
 * @swagger
 * /api/notification/create-notification:
 *   post:
 *     summary: Crea una nueva notificación.
 *     description: Crea una nueva notificación y la comparte con usuarios seleccionados.
 *     tags: [Notificaciones]
 *     security:
 *       - bearerAuth: []  # Utiliza bearerAuth para especificar que se debe enviar el token JWT en el encabezado Authorization
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema:
 *           type: string
 *           format: JWT
 *         description: Token JWT obtenido al autenticarse.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notifications'
 *     responses:
 *       200:
 *         description: Notificación creada exitosamente.
 *       401:
 *         description: No autorizado. El token JWT no es válido o está ausente.
 *       500:
 *         description: Error interno del servidor.
 */