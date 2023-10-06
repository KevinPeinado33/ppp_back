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
 * /api/ppp/take-evaluation/{idEvaluation}:
 *   put:
 *     summary: Actualiza una evaluación para un plan PPP específico.
 *     tags: [PPP Evaluation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación JWT en el formato "Bearer {token}".
 *       - in: path
 *         name: idEvaluation
 *         required: true
 *         description: ID de la evaluación a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - score
 *               - observationAdvisor
 *               - observationBusinessMentor
 *               - numberAttempts
 *               - answers
 *             example:
 *               score: 18
 *               observationAdvisor: "Great performance!"
 *               observationBusinessMentor: "Keep up the good work."
 *               numberAttempts: 1
 *               answers:
 *                 - id: "07266832-6d97-4df9-826b-f7500b8d6174"
 *                   answer: "Answer1"
 *                   puntuation: 5
 *                 - id: "9b320bc4-35b0-476f-ad08-41f464840eac"
 *                   answer: "Answer2"
 *                   puntuation: 6
 *                 - id: "e65957ee-e4fc-44ec-b5d3-a259a51e540d"
 *                   answer: "Answer3"
 *                   puntuation: 7
 *     responses:
 *       200:
 *         description: Evaluación del plan PPP actualizada exitosamente.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       500:
 *         description: Error del servidor al actualizar la evaluación del plan PPP.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT 
 */