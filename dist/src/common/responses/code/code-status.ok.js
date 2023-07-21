"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODE_STATUS = void 0;
var CODE_STATUS;
(function (CODE_STATUS) {
    /**
     * Codigo de estatus correctos
     */
    CODE_STATUS[CODE_STATUS["OK"] = 200] = "OK";
    CODE_STATUS[CODE_STATUS["CREATED"] = 201] = "CREATED";
    CODE_STATUS[CODE_STATUS["NO_CONTENT"] = 204] = "NO_CONTENT";
    /**
     * Codigo de error ocacionados por el cliente
     */
    CODE_STATUS[CODE_STATUS["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    CODE_STATUS[CODE_STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    CODE_STATUS[CODE_STATUS["FORBIDDEN"] = 403] = "FORBIDDEN";
    CODE_STATUS[CODE_STATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
    CODE_STATUS[CODE_STATUS["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    /**
     * Codigo de estatus con errores por parte del servidor
     */
    CODE_STATUS[CODE_STATUS["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(CODE_STATUS || (exports.CODE_STATUS = CODE_STATUS = {}));
//# sourceMappingURL=code-status.ok.js.map