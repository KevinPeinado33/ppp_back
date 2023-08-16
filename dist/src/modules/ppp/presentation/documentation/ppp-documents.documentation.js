"use strict";
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
/**
 * @swagger
 * /api/ppp/create-ppp-document:
 *   post:
 *     summary: Crea un nuevo documento para un plan PPP.
 *     tags: [PPP Document]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PPPDocument'
 *     responses:
 *       201:
 *         description: Documento del plan PPP creado correctamente.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       500:
 *         description: Error del servidor al crear el documento del plan PPP.
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
//# sourceMappingURL=ppp-documents.documentation.js.map