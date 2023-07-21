"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionEvaluationDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreateQuestionEvaluationDto {
    constructor() { }
}
exports.CreateQuestionEvaluationDto = CreateQuestionEvaluationDto;
CreateQuestionEvaluationDto.schema = joi_1.default.object({
    question: joi_1.default.string().required(),
    status: joi_1.default.boolean(),
    type: joi_1.default.string().valid('inicio', 'intermedio', 'fin').required(),
    area: joi_1.default.string().required()
});
//# sourceMappingURL=create-question-evaluation.dto.js.map