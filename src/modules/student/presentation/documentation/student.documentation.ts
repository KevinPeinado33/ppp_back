/**
 * @swagger
 * components:
 *  schemas:
 *      Student:
 *          type: object
 *          properties:
 *              code:
 *                  type: string
 *                  description: Código del estudiante.
 *              cycle:
 *                  type: number
 *                  description: Ciclo del estudiante.
 *              intershipHours:
 *                  type: number
 *                  description: Horas de prácticas del estudiante.
 *              nameCv:
 *                  type: string
 *                  description: Nombre del archivo del CV del estudiante.
 *              urlCv:
 *                  type: string
 *                  format: uri
 *                  description: URL del CV del estudiante.
 *              finalRate:
 *                  type: number
 *                  description: Calificación final del estudiante.
 *              planPPP:
 *                  type: string
 *                  description: Identificador del plan PPP al que está asociado el estudiante.
 *              userId:
 *                  type: string
 *                  description: Identificador del usuario asociado al estudiante.
 *          required:
 *              - code
 *              - cycle
 *          example:
 *              code: "20230001"
 *              cycle: 2023
 *              intershipHours: 200
 *              nameCv: "CV Estudiante 1"
 *              urlCv: "https://ejemplo.com/cv1.pdf"
 *              finalRate: 8.5
 *              planPPP: "12e12e12EEEDccf4uuid"
 *              userId: "1a2b3c4d5e6f7g8h9i0j"
 */

/**
 * @swagger
 * /api/student/get-all-students:
 *   get:
 *     summary: Obtiene todos los estudiantes.
 *     tags: [Estudiantes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todos los estudiantes.
 *       500:
 *         description: Error del servidor al obtener estudiantes.
 */

/**
 * @swagger
 * /api/student/create-list-students:
 *   post:
 *     summary: Crea una lista de estudiantes.
 *     tags: [Estudiantes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: Lista de estudiantes creada exitosamente.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       500:
 *         description: Error del servidor al crear la lista de estudiantes.
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
 *         description: Token de autenticación de usuario (JWT).
 */