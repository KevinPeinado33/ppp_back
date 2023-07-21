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
 *                  description: Id del usuario que ha creado el plan PPP.
 *          required:
 *              - name
 *              - intershipHours
 *              - startDate
 *              - endDate
 *              - bannerUrl
 *              - commited
 *          example:
 *              name: PPP - 2020
 *              intershipHours: 200
 *              startDate: '2023-07-20'
 *              endDate: '2023-12-31'
 *              bannerUrl: ['https://ejemplo.com/banner1.jpg', 'https://ejemplo.com/banner2.jpg']
 *              status: true
 *              commited: '12e12e12EEEDccf4uuid'
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
 */
/**
 * @swagger
 * /api/plan/create-area-plan:
 *   post:
 *     summary: Crea un nuevo Area Plan para el plan PPP.
 *     tags: [Area Plan]
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
 */
/**
 * @swagger
 * /api/plan/create-question-evaluation:
 *   post:
 *     summary: Crea una nueva evaluación de pregunta.
 *     tags: [Question Evaluation]
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
 */
/**
 * @swagger
 * /api/plan/get-all:
 *   get:
 *     summary: Crea una nueva evaluación de pregunta.
 *     tags: [Plan PPP]
 *     responses:
 *       200:
 *         description: Lista completa
 *       404:
 *         description: Todo vacio
 *       500:
 *         description: Error del servidor.
 */
/**
 * @swagger
 * /api/plan/get-all-types-documents:
 *   get:
 *     summary: Obtiene todos los tipos de documentos disponibles.
 *     tags: [ Type Documents ]
 *     responses:
 *       200:
 *         description: Lista de tipos de documentos obtenida exitosamente.
 *       404:
 *         description: Lista vacia.
 *       500:
 *         description: Error del servidor al obtener los tipos de documentos.
 */
/**
 * @swagger
 *   /api/plan/create-document-plan:
 *     post:
 *       summary: Crea un nuevo documento para un plan PPP.
 *       tags: [Plan Document PPP]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanDocument'
 *       responses:
 *         201:
 *           description: Documento del plan PPP creado correctamente.
 *         400:
 *           description: Error de validación o solicitud incorrecta.
 *         500:
 *           description: Error del servidor.
 */
