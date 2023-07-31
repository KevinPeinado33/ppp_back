"use strict";
/**
 * @swagger
 * /api/ppp/get-result-satisfaction/{idEvaluation}:
 *   get:
 *     summary: Obtener resultado de satisfacción por ID de evaluación.
 *     tags: [ PPP ]
 *     parameters:
 *       - in: path
 *         name: idEvaluation
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID de la evaluación para obtener el resultado de satisfacción.
 *     responses:
 *       200:
 *         description: Resultado de satisfacción obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 evaluationId:
 *                   type: string
 *                   description: ID de la evaluación.
 *                 satisfactionScore:
 *                   type: number
 *                   description: Puntuación de satisfacción obtenida en la evaluación.
 *                 comments:
 *                   type: string
 *                   description: Comentarios adicionales proporcionados en la evaluación.
 *       404:
 *         description: No se encontró la evaluación o no tiene un resultado de satisfacción asociado.
 *       500:
 *         description: Error del servidor al obtener el resultado de satisfacción.
 */ 
//# sourceMappingURL=question-answer.documentation.js.map