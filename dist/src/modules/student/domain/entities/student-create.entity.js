"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateEntity = void 0;
const joi_1 = __importDefault(require("joi"));
class StudentCreateEntity {
    constructor() { }
}
exports.StudentCreateEntity = StudentCreateEntity;
StudentCreateEntity.schema = joi_1.default.object({
    code: joi_1.default.string().pattern(/^[0-9]+$/, 'Solo se acepta numeros').required(),
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    cycle: joi_1.default.number().required(),
    academySchool: joi_1.default.string().required(),
    dni: joi_1.default.string().pattern(/^[0-9]+$/, 'Solo se acepta numeros').required()
});
//# sourceMappingURL=student-create.entity.js.map