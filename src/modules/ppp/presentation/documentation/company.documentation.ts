/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre de la empresa.
 *         area:
 *           type: string
 *           description: Área de la empresa.
 *         ruc:
 *           type: string
 *           description: Registro Único de Contribuyentes (RUC) de la empresa.
 *         address:
 *           type: string
 *           description: Dirección de la empresa.
 *         bussinessMentor:
 *           type: string
 *           description: Mentor de negocios de la empresa.
 *         dniMentor:
 *           type: string
 *           description: Documento Nacional de Identidad (DNI) del mentor de negocios.
 *         cellphoneMentor:
 *           type: string
 *           description: Número de teléfono celular del mentor de negocios.
 *         emailMentor:
 *           type: string
 *           description: Correo electrónico del mentor de negocios.
 *         academicDegreeMentor:
 *           type: string
 *           description: Título académico del mentor de negocios.
 *         status:
 *           type: boolean
 *           description: Estado de la empresa PPP.
 *         ppp:
 *           type: string
 *           format: uuid
 *           description: Identificador único de la empresa PPP (UUID).
 */

/**
 * @swagger
 * /api/ppp/create-company-ppp:
 *   post:
 *     summary: Crea una nueva empresa PPP.
 *     description: Crea una nueva empresa Persona Proveedora de Prácticas Preprofesionales (PPP).
 *     tags: [Empresas PPP]
 *     security:
 *       - bearerAuth: []  # Utiliza bearerAuth para especificar que se debe enviar el token JWT en el encabezado Authorization
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Company'
 *     responses:
 *       200:
 *         description: Empresa PPP creada exitosamente.
 *       401:
 *         description: No autorizado. El token JWT no es válido o está ausente.
 *       500:
 *         description: Error interno del servidor.
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