"use strict";
/**
 * @swagger
 * components:
 *  schemas:
 *      PlanPPP:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: Nombre del plan PPP.
 *              intershipHours:
 *                  type: number
 *                  description: Horas de prácticas.
 *              startDate:
 *                  type: string
 *                  format: date
 *                  description: Fecha de inicio del plan PPP.
 *              endDate:
 *                  type: string
 *                  format: date
 *                  description: Fecha de fin del plan PPP.
 *              bannerUrl:
 *                  type: array
 *                  items:
 *                      type: string
 *                      description: URLs de banners asociados al plan PPP.
 *              status:
 *                  type: boolean
 *                  description: Estado del plan PPP.
 *              commited:
 *                  type: string
 *                  description: ID del usuario que ha creado el plan PPP (formato UUID).
 *              documents:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/PlanDocument'
 *          required:
 *              - name
 *              - intershipHours
 *              - startDate
 *              - endDate
 *              - bannerUrl
 *              - commited
 *              - documents
 *          example:
 *              name: PPP - 2020
 *              intershipHours: 200
 *              startDate: '2023-07-20'
 *              endDate: '2023-12-31'
 *              bannerUrl: ['https://ejemplo.com/banner1.jpg', 'https://ejemplo.com/banner2.jpg']
 *              status: true
 *              commited: '12e12e12EEEDccf4uuid'
 *              documents:
 *                  - name: Documento 1
 *                    urlDocument: 'https://ejemplo.com/documento1.pdf'
 *                    description: Descripción del documento 1
 *                    status: true
 *                    type: Tipo A
 *                  - name: Documento 2
 *                    urlDocument: 'https://ejemplo.com/documento2.pdf'
 *                    description: Descripción del documento 2
 *                    status: false
 *                    type: Tipo B
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     AreaPlan:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del área del plan.
 *         description:
 *           type: string
 *           description: Descripción del área del plan.
 *         status:
 *           type: boolean
 *           description: Estado del área del plan.
 *         plan:
 *           type: string
 *           description: ID del plan al que pertenece el área.
 *       required:
 *         - name
 *         - description
 *         - plan
 *       example:
 *         name: Area Redes y comunicaciones
 *         description: Preguntas base para infraestructura.
 *         status: true
 *         plan: 'uuid'
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      QuestionEvaluation:
 *          type: object
 *          properties:
 *              question:
 *                  type: string
 *                  description: Pregunta de la evaluación a crear.
 *              status:
 *                  type: boolean
 *                  description: Estado de la evaluación a crear.
 *              type:
 *                  type: string
 *                  description: Tipo de la evaluación a crear (inicio, intermedio o fin).
 *              area:
 *                  type: string
 *                  description: ID del área del plan PPP al que pertenecerá la evaluación.
 *          required:
 *              - question
 *              - type
 *              - area
 *          example:
 *              question: ¿Maneja las bases de las capas OSI?
 *              status: true
 *              type: inicio
 *              area: 12e12e12EEEDccf4uuid
 */
/**
 * @swagger
 * components:
 *  schemas:
 *      PlanDocument:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: Nombre del documento.
 *              urlDocument:
 *                  type: string
 *                  description: Documento en formato Base64.
 *              description:
 *                  type: string
 *                  description: Descripción del documento.
 *              status:
 *                  type: boolean
 *                  description: Estado del documento.
 *              type:
 *                  type: string
 *                  description: Tipo de documento (UUID).
 *              planPPP:
 *                  type: string
 *                  description: Plan PPP al que pertenece el documento (UUID).
 *          required:
 *              - name
 *              - urlDocument
 *              - description
 *              - type
 *              - planPPP
 *          example:
 *              name: Documento de prueba
 *              urlDocument: "https://gatitas.document.com/name?=documento_prueba"
 *              description: Este es un documento de prueba en formato PDF.
 *              status: true
 *              type: 123e4567-e89b-12d3-a456-426614174000
 *              planPPP: 789e4567-e89b-12d3-a456-426614174000
 */
/**
 * @swagger
 * /api/plan/create-plan-ppp:
 *   post:
 *     summary: Crea un nuevo plan PPP.
 *     tags: [Plan PPP]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PlanPPP'
 *     responses:
 *       201:
 *         description: Plan PPP creado correctamente.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       500:
 *         description: Error del servidor.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *     parameters:
 *       - in: header
 *         name: x-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación de usuario.
 */
/**
 * @swagger
 * /api/plan/create-area-plan:
 *   post:
 *     summary: Crea un nuevo Area Plan para el plan PPP.
 *     tags: [Area Plan]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AreaPlan'
 *     responses:
 *       201:
 *         description: Area Plan creado correctamente.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       500:
 *         description: Error del servidor.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *     parameters:
 *       - in: header
 *         name: x-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación de usuario.
 */
/**
 * @swagger
 * /api/plan/create-question-evaluation:
 *   post:
 *     summary: Crea una nueva evaluación de pregunta.
 *     tags: [Question Evaluation]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/QuestionEvaluation'
 *     responses:
 *       201:
 *         description: Evaluación de pregunta creada exitosamente.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       500:
 *         description: Error del servidor.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *     parameters:
 *       - in: header
 *         name: x-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación de usuario.
 */
/**
 * @swagger
 * /api/plan/get-all:
 *   get:
 *     summary: Obtener todos los planes PPP.
 *     tags: [Plan PPP]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista completa de planes PPP.
 *       404:
 *         description: No se encontraron planes PPP.
 *       500:
 *         description: Error del servidor al obtener los planes PPP.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *     parameters:
 *       - in: header
 *         name: x-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación de usuario.
 */
/**
 * @swagger
 * /api/plan/get-all-types-documents:
 *   get:
 *     summary: Obtener todos los tipos de documentos disponibles.
 *     tags: [ Type Documents ]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tipos de documentos obtenida exitosamente.
 *       404:
 *         description: Lista vacía. No se encontraron tipos de documentos.
 *       500:
 *         description: Error del servidor al obtener los tipos de documentos.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *     parameters:
 *       - in: header
 *         name: x-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación de usuario.
 */
/**
 * @swagger
 * /api/plan/create-document-plan:
 *   post:
 *     summary: Crea un nuevo documento para un plan PPP.
 *     tags: [Plan Document PPP]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PlanDocument'
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
 *         name: x-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación de usuario.
 */
/**
 * @swagger
 * /api/plan/get-bases-ppp:
 *   get:
 *     summary: Obtener todas las bases PPP.
 *     tags: [Plan PPP]
 *     responses:
 *       200:
 *         description: Lista de todas las bases PPP obtenidas exitosamente.
 *       500:
 *         description: Error del servidor al obtener las bases PPP.
 */
/**
 * @swagger
 * /api/plan/get-areas-plan/{idPlan}:
 *   get:
 *     summary: Obtener áreas por ID de plan
 *     tags: [Area Plan]
 *     parameters:
 *       - in: path
 *         name: idPlan
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del plan para el que se desean obtener las áreas.
 *     responses:
 *       200:
 *         description: Éxito. Devuelve las áreas relacionadas con el plan especificado.
 *       404:
 *         description: No se encontraron áreas para el plan especificado.
 */ 
//# sourceMappingURL=plan.documentation.js.map