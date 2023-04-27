export enum CODE_STATUS {
    
    /**
     * Codigo de estatus correctos
     */
    OK         = 200,
    CREATED    = 201,
    NO_CONTENT = 204,

    /**
     * Codigo de error ocacionados por el cliente
     */
    BAD_REQUEST        = 400,
    UNAUTHORIZED       = 401,
    FORBIDDEN          = 403,
    NOT_FOUND          = 404,
    METHOD_NOT_ALLOWED = 405,

    /**
     * Codigo de estatus con errores por parte del servidor
     */
    INTERNAL_SERVER_ERROR = 500,

}
