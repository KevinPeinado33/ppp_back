/**
 * @swagger
 * /api/ppp/get-result-evaluation/{idEvaluation}:
 *   get:
 *     summary: Obtener un resultado de evaluación por ID
 *     description: Obtiene un resultado de evaluación específico según su ID.
 *     tags: [Resultados de Evaluación]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idEvaluation
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del resultado de evaluación a obtener.
 *     responses:
 *       '200':
 *         description: Respuesta exitosa con el resultado de evaluación solicitado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResultEvaluation'
 *       '404':
 *         description: Resultado de evaluación no encontrado.
 *       '500':
 *         description: Error del servidor al obtener el resultado de evaluación.
 */
