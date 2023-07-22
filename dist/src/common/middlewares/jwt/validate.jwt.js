"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const msg_response_1 = require("../../responses/msg.response");
const code_status_ok_1 = require("../../responses/code/code-status.ok");
const validateJWT = (req, res, next) => {
    const token = req.header('x-token');
    const secretKey = process.env.SECRET_KEY || '';
    if (!token) {
        return (0, msg_response_1.message)({
            response: res,
            code: code_status_ok_1.CODE_STATUS.UNAUTHORIZED,
            info: 'No hay token en la petición.'
        });
    }
    try {
        const { uuid } = jsonwebtoken_1.default.verify(token, secretKey);
        if (!uuid) {
            return (0, msg_response_1.message)({
                response: res,
                code: code_status_ok_1.CODE_STATUS.UNAUTHORIZED,
                info: 'Token no valido, no existe un usuario.'
            });
        }
        next();
    }
    catch (error) {
        (0, msg_response_1.message)({
            response: res,
            code: code_status_ok_1.CODE_STATUS.UNAUTHORIZED,
            info: 'Token no valido.'
        });
    }
};
exports.validateJWT = validateJWT;
//# sourceMappingURL=validate.jwt.js.map