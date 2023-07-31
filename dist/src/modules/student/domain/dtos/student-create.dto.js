"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreateDto = void 0;
const joi_1 = __importDefault(require("joi"));
class StudentCreateDto {
    constructor() { }
}
exports.StudentCreateDto = StudentCreateDto;
StudentCreateDto.schema = joi_1.default.object({
    code: joi_1.default.string().required(),
    cycle: joi_1.default.number().required(),
    intershipHours: joi_1.default.number(),
    nameCv: joi_1.default.string(),
    urlCv: joi_1.default.string().uri(),
    finalRate: joi_1.default.number(),
    planPPP: joi_1.default.string().required(),
    userId: joi_1.default.string(),
});
//# sourceMappingURL=student-create.dto.js.map