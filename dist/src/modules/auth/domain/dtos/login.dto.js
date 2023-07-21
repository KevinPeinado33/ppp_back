"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const joi_1 = __importDefault(require("joi"));
class LoginDto {
    constructor() { }
}
exports.LoginDto = LoginDto;
LoginDto.schema = joi_1.default.object({
    userName: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});
//# sourceMappingURL=login.dto.js.map