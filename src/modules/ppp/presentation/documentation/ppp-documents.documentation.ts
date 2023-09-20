/**
 * @swagger
 * components:
 *  schemas:
 *      CommentDocumentPPP:
 *          type: object
 *          properties:
 *              comment: 
 *                  type: string
 *                  description: Algun comentario de las personas.
 */

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
 *     security:
 *          - bearerAuth:[] #aqui metemos el token pe crrano
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

/**
 * @swagger
 * /api/ppp/insert-comment-document/:idDocumentPPP:
 *  post:
 *      summary: Insercción de comentarios en el documento
 *      description: Insercción de comentarios en el documento y tambien cambio de estado del documento.
 *      tags: [PPP Document]
 *      parameters:
 *          - in: path
 *            name: idDocumentPPP
 *            schema:
 *              type: string
 *              format: uuid
 *            required: true
 *            description: ID del documento de PPP subidos por el estudiante.
 *      security:
 *          - bearerAuth:[] #aqui metemos el token pe crrano
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CommentDocumentPPP'
 *      responses:
 *          200:
 *              description: Comentario o estado del documento terminado.
 *          401:
 *              description: No autorizado, el token ta mal pe.
 *          500:
 *              description: Error en el servidor.
 */