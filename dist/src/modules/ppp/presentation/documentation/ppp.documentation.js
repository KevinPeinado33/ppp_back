"use strict";
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
//# sourceMappingURL=ppp.documentation.js.map