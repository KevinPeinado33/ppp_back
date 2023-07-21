"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const generate_jwt_1 = require("../../../../common/utils/jwt/generate.jwt");
const dtos_1 = require("../dtos");
class LoginUseCase {
    constructor(response, loginDto, repository) {
        this.response = response;
        this.loginDto = loginDto;
        this.repository = repository;
    }
    async execute() {
        const { error } = dtos_1.LoginDto.schema.validate(this.loginDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const userFound = await this.repository.findUserByEmail(this.loginDto.userName);
            if (!userFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `El usuario ${this.loginDto.userName}, no se ha encontrado.`
                });
            }
            const isPasswordCorrect = await bcrypt_1.default.compare(this.loginDto.password, userFound.password);
            if (!isPasswordCorrect) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                    info: 'Contraseña incorrecta.'
                });
            }
            const token = await (0, generate_jwt_1.generateKey)(userFound.id);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: {
                    ...userFound,
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