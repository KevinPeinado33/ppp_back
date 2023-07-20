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
