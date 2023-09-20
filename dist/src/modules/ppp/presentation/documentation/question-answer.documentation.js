"use strict";
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
/**
 * @swagger
 * /api/ppp/create-question-answer:
 *   post:
 *     summary: Crea una nueva pregunta y respuesta para una evaluación de PPP.
 *     tags: [PPP]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer
 *               - puntuation
 *               - evaluations
 *             example:
 *               question: "¿Cuál es tu pregunta?"
 *               answer: "Esta es una respuesta"
 *               puntuation: "10"
 *               evaluations: "22f87cef-5309-49c3-8051-ae63019ddf5f"
 *     responses:
 *       201:
 *         description: Pregunta y respuesta creadas correctamente para la evaluación de PPP.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       500:
 *         description: Error del servidor al crear la pregunta y respuesta para la evaluación de PPP.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación JWT en el formato "Bearer {token}".
 */ 
//# sourceMappingURL=question-answer.documentation.js.map