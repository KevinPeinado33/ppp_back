/**
 * @swagger
 * /api/ppp/get-documents-ppp/{idPPP}:
 *   get:
 *     summary: Obtener documentos de PPP por ID del Proceso de Prácticas Pre Profesionales (PPP).
 *     tags: [ PPP ]
 *     parameters:
 *       - in: path
 *         name: idPPP
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del Proceso de Prácticas Pre Profesionales (PPP) para filtrar los documentos asociados.
 *     responses:
 *       200:
 *         description: Documentos de Prácticas Pre Profesionales (PPP) obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   documentId:
 *                     type: string
 *                     description: ID del documento de Prácticas Pre Profesionales (PPP).
 *                   documentName:
 *                     type: string
 *                     description: Nombre del documento de Prácticas Pre Profesionales (PPP).
 *                   documentType:
 *                     type: string
 *                     description: Tipo de documento de Prácticas Pre Profesionales (PPP).
 *       404:
 *         description: No se encontró el Proceso de Prácticas Pre Profesionales (PPP) o no tiene documentos asociados.
 *       500:
 *         description: Error del servidor al obtener los documentos de Prácticas Pre Profesionales (PPP).
 */