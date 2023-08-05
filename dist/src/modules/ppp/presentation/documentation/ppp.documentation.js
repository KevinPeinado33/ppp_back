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
//# sourceMappingURL=ppp.documentation.js.map