/**
 * @swagger
 * /api/ppp/get-evaluation-by-ppp/{idPPP}:
 *   get:
 *     summary: Obtener historial de evaluaciones por ID del plan PPP.
 *     tags: [ PPP ]
 *     parameters:
 *       - in: path
 *         name: idPPP
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del plan PPP para filtrar las evaluaciones.
 *     responses:
 *       200:
 *         description: Historial de evaluaciones obtenido exitosamente.
 *       404:
 *         description: No se encontró el plan PPP o no tiene evaluaciones asociadas.
 *       500:
 *         description: Error del servidor al obtener el historial de evaluaciones.
 */

/**
* @swagger
 * /api/ppp/update-assing-advisor-ppp/{idPPP}/{advisorID}:
 *   put:
 *     summary: Actualiza la asignación de un asesor a un PPP (Proyecto de Prácticas Profesionales).
 *     tags: [ PPP ]
 *     security:
 *       - bearerAuth: []
 *     description: Actualiza la asignación de un asesor a un PPP identificado por su idPPP y el ID del asesor.
 *     parameters:
 *       - in: path
 *         name: idPPP
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del PPP (Proyecto de Prácticas Profesionales) que se desea actualizar.
 *       - in: path
 *         name: advisorID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del asesor que se desea asignar al PPP.
 *     responses:
 *       200:
 *         description: Respuesta exitosa. El asesor ha sido asignado correctamente al PPP.
 *       404:
 *         description: No se encontró el PPP o el asesor con los IDs proporcionados.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/ppp/update-intership-hours:
 *   put:
 *     summary: Actualiza las horas de prácticas de un PPP.
 *     tags: [PPP]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateInterhipHoursRequest'
 *           example:
 *             idPPP: "3096059e-7456-4fa5-b029-b6fe0a3be4b2"
 *             intershipHours: 500
 *     responses:
 *       200:
 *         description: Horas de prácticas actualizadas correctamente para el PPP.
 *         content:
 *           application/json:
 *             example:
 *               message: Horas de prácticas actualizadas exitosamente para el PPP.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       500:
 *         description: Error del servidor al actualizar las horas de prácticas del PPP.
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

/**
 * @swagger
 * /api/ppp/update-register-letter-aceptance/{id}:
 *   put:
 *     summary: Actualizar carta de aceptación de registro.
 *     description: Actualiza el estado de la carta de aceptación de registro identificada por su ID.
 *     tags: [PPP]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la carta de aceptación de registro que se desea actualizar.
 *     responses:
 *       200:
 *         description: Respuesta exitosa. La carta de aceptación de registro ha sido actualizada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *       400:
 *         description: Solicitud incorrecta. El ID proporcionado no es válido o está mal formateado.
 *       401:
 *         description: No autorizado. El JWT no es válido o no se proporcionó.
 *       404:
 *         description: No se encontró la carta de aceptación de registro con el ID especificado.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/ppp/update-close-ppp/{id}:
 *   put:
 *     summary: Actualizar el estado de cierre de un PPP (Proyecto de Prácticas Profesionales).
 *     description: Actualiza el estado de cierre de un PPP.
 *     tags: [PPP]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idPPP:
 *                 type: string
 *                 description: ID del PPP que se desea actualizar.
 *               closed:
 *                 type: boolean
 *                 description: Estado de cierre del PPP (true para cerrado, false para no cerrado).
 *     responses:
 *       200:
 *         description: Respuesta exitosa. El estado de cierre del PPP ha sido actualizado correctamente.
 *       400:
 *         description: Solicitud incorrecta. Los datos proporcionados son inválidos o están incompletos.
 *       404:
 *         description: No se encontró el PPP con el ID proporcionado.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /api/ppp/create-evaluation:
 *   post:
 *     summary: Crea una nueva evaluación para un plan PPP.
 *     tags: [PPP Evaluation]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *               - dateEnd
 *               - directedTo
 *               - ppp
 *               - questions
 *             example:
 *               type: "Inicio"
 *               dateEnd: "2023-09-30T12:00:00Z"
 *               directedTo: "2020221230"
 *               ppp: "3096059e-7456-4fa5-b029-b6fe0a3be4b2"
 *               questions:
 *                 - question: "¿Pregunta 1?"
 *                 - question: "¿Pregunta 2?"
 *                 - question: "¿Pregunta 3?"
 *     responses:
 *       201:
 *         description: Evaluación del plan PPP creada correctamente.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       500:
 *         description: Error del servidor al crear la evaluación del plan PPP.
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

/**
 * @swagger
 * /view-student-profile/{idPPP}:
 *   get:
 *     summary: View student profile.
 *     description: Retrieves the profile of a student based on their PPP (Proyecto de Prácticas Profesionales) ID.
 *     tags: [PPP]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idPPP
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the PPP (Proyecto de Prácticas Profesionales) for which you want to view the student profile.
 *     responses:
 *       200:
 *         description: Successful response. Returns the student's profile information.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentProfile' # Replace with the actual schema reference for the student profile
 *       404:
 *         description: Not found. No student profile was found for the specified PPP ID.
 *       500:
 *         description: Internal server error.
 */
