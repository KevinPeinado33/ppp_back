"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreateUserDto {
    constructor() { }
}
exports.CreateUserDto = CreateUserDto;
CreateUserDto.schema = joi_1.default.object({
    userName: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    cellphone: joi_1.default.string().pattern(/^[0-9]{9}$/).message('Número de telefono no valido.').required(),
    area: joi_1.default.string().required(),
    numStudents: joi_1.default.number(),
    urlProfile: joi_1.default.string().uri().required(),
    status: joi_1.default.boolean(),
    rolId: joi_1.default.string().optional()
});
//# sourceMappingURL=create-user.dto.js.map