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
    dni: joi_1.default.string().required(),
    userName: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    cellphone: joi_1.default.string().required(),
    area: joi_1.default.string().required(),
    numStudents: joi_1.default.number(),
    urlProfile: joi_1.default.string().required(),
    status: joi_1.default.boolean(),
});
//# sourceMappingURL=create-user.dto.js.map