"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const msg_response_1 = require("../../../../common/responses/msg.response");
const entities_1 = require("../entities");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const generate_jwt_1 = require("../../../../common/utils/jwt/generate.jwt");
class LoginUseCase {
    constructor(response, loginEntity, repository) {
        this.response = response;
        this.loginEntity = loginEntity;
        this.repository = repository;
    }
    async execute() {
        const { error } = entities_1.LoginEntity.schema.validate(this.loginEntity);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const userFound = await this.repository.findUserByEmail(this.loginEntity.username);
            if (!userFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `El usuario ${this.loginEntity.username}, no se ha encontrado.`
                });
            }
            const isPasswordCorrect = await bcrypt_1.default.compare(this.loginEntity.password, userFound.password);
            if (!isPasswordCorrect) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                    info: 'Contraseña incorrecta.'
                });
            }
            const token = await (0, generate_jwt_1.generateKey)(userFound._id);
            delete userFound.password;
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: {
                    ...userFound.toObject(),
                    token
                }
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            });
        }
    }
}
exports.LoginUseCase = LoginUseCase;
//# sourceMappingURL=login.usecase.js.map