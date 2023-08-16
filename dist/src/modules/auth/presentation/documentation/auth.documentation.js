"use strict";
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        userName:
 *          type: string
 *          description: Nombre de usuario del usuario.
 *        password:
 *          type: string
 *          description: Contraseña del usuario.
 *        firstName:
 *          type: string
 *          description: Nombre del usuario.
 *        lastName:
 *          type: string
 *          description: Apellido del usuario.
 *        email:
 *          type: string
 *          format: email
 *          description: Correo electrónico del usuario.
 *        cellphone:
 *          type: string
 *          description: Número de teléfono del usuario.
 *        area:
 *          type: string
 *          description: Área a la que pertenece el usuario.
 *        numStudents:
 *          type: integer
 *          description: Número de estudiantes del usuario.
 *        urlProfile:
 *          type: string
 *          description: URL del perfil del usuario.
 *        status:
 *          type: boolean
 *          description: Estado del usuario (opcional).
 *
 *      required:
 *        - userName
 *        - password
 *        - firstName
 *        - lastName
 *        - email
 *        - cellphone
 *        - area
 *        - numStudents
 *        - urlProfile
 *
 *      example:
 *        userName: john_doe
 *        password: secretpassword
 *        firstName: John
 *        lastName: Doe
 *        email: john.doe@example.com
 *        cellphone: 923966201
 *        area: Desarrollo
 *        numStudents: 50
 *        urlProfile: https://example.com/profile/john_doe
 *        status: true
 */
/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Registrar un nuevo usuario.
 *     tags: [Usuario]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente.
 *       400:
 *         description: Error de validación o solicitud incorrecta.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       500:
 *         description: Error del servidor al registrar el usuario.
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
 *
 */
/**
 * @swagger
 * /api/auth/sign-in:
 *  post:
 *    summary: Iniciar sesión.
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              userName:
 *                type: string
 *                description: Nombre de usuario.
 *                example: example_user
 *              password:
 *                type: string
 *                description: Contraseña del usuario.
 *                example: mypassword123
 *    responses:
 *      200:
 *        description: Inicio de sesión exitoso.
 *      400:
 *        description: Error en la solicitud o datos de inicio de sesión incorrectos.
 *      401:
 *        description: Credenciales inválidas, inicio de sesión fallido.
 */
/**
 * @swagger
 * /api/user/get-all:
 *   get:
 *     summary: Obtener todos los usuarios.
 *     tags: [Usuario]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios.
 *       401:
 *         description: No autorizado. El token de acceso no fue proporcionado o es inválido.
 *       500:
 *         description: Error del servidor al obtener usuarios.
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
 * /get-users-by-rol/{rolSearch}:
 *   get:
 *     summary: Obtener usuarios por rol.
 *     tags: [Usuario]
 *     security:
 *       - bearerAuth: []
 *     description: Obtiene una lista de usuarios que tienen el rol especificado.
 *     parameters:
 *       - in: path
 *         name: rolSearch
 *         required: true
 *         schema:
 *           type: string
 *         description: Rol por el cual se buscarán los usuarios.
 *     responses:
 *       200:
 *         description: Respuesta exitosa. Devuelve la lista de usuarios que tienen el rol especificado.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User' # Reemplaza esto con la referencia al esquema del usuario
 *       400:
 *         description: Solicitud incorrecta. El rol proporcionado no es válido o está mal formateado.
 *       404:
 *         description: No se encontraron usuarios con el rol especificado.
 *       500:
 *         description: Error interno del servidor.
 */ 
//# sourceMappingURL=auth.documentation.js.map