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
