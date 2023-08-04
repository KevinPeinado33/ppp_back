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
 *              cycle: 5
 *              planPPP: "f5239924-c2af-497d-826e-de5307a1708c"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserDto:
 *       type: object
 *       properties:
 *         userName:
 *           type: string
 *         password:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *         cellphone:
 *           type: string
 *         area:
 *           type: string
 *         urlProfile:
 *           type: string
 *         status:
 *           type: boolean
 *     StudentCreateOneSelfDto:
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *           description: Código del estudiante.
 *         cycle:
 *           type: number
 *           description: Ciclo del estudiante.
 *         intershipHours:
 *           type: number
 *           description: Horas de prácticas del estudiante.
 *         nameCv:
 *           type: string
 *           description: Nombre del archivo del CV del estudiante.
 *         urlCv:
 *           type: string
 *           format: uri
 *           description: URL del CV del estudiante.
 *         finalRate:
 *           type: number
 *           description: Calificación final del estudiante.
 *         planPPP:
 *           type: string
 *           description: Identificador del plan PPP al que está asociado el estudiante.
 *         user:
 *           $ref: '#/components/schemas/CreateUserDto'
 *       required:
 *         - code
 *         - cycle
 *       example:
 *         code: "202300011"
 *         cycle: 6
 *         intershipHours: 200
 *         nameCv: "CV_kevin"
 *         urlCv: "https://ejemplo.com/cv12.pdf"
 *         finalRate: 8.5
 *         planPPP: "12e12e12EEEDccf4uuid"
 *         user:
 *           userName: "janedoe"
 *           password: "janepassword"
 *           firstName: "Jane"
 *           lastName: "Doe"
 *           email: "jane_doe@gmail.com"
 *           cellphone: "555555555"
 *           area: "Desarollo"
 *           urlProfile: "https://example.com/jane_profile.jpg"
 *           status: false
 */

/**
 * @swagger
 * /api/student/create-list-students:
 *   post:
 *     summary: Crea una lista de estudiantes (excel).
 *     tags: [Estudiante]
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

/**
 * @swagger
 * /api/student/get-by-code/{codeStudent}:
 *   get:
 *     summary: Obtener estudiante por código (Para ver el perfil).
 *     tags: [Estudiante]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: codeStudent
 *         schema:
 *           type: string
 *         required: true
 *         description: Código del estudiante a buscar.
 *       - in: header
 *         name: x-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación de usuario (JWT).
 *     responses:
 *       200:
 *         description: Estudiante encontrado exitosamente.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       404:
 *         description: Estudiante no encontrado.
 *       500:
 *         description: Error del servidor al buscar el estudiante.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */
/**
 * @swagger
 * /api/student/create-student:
 *   post:
 *     summary: Para que el estudiante se cree solo su cuenta, .
 *     tags: [Estudiante]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentCreateOneSelfDto'
 *     responses:
 *       200:
 *         description: Estudiante creado exitosamente.
 *         content:
 *           application/json:
 *             example:
 *               message: Estudiante creado exitosamente.
 *       400:
 *         description: Error en la solicitud. Verifique los datos ingresados.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       500:
 *         description: Error del servidor al crear el estudiante.
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 *     parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Token de autenticación de usuario (JWT).
 */
