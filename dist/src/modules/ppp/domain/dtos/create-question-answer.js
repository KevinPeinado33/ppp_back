"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionAnswerDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreateQuestionAnswerDto {
    constructor() { }
}
exports.CreateQuestionAnswerDto = CreateQuestionAnswerDto;
CreateQuestionAnswerDto.schema = joi_1.default.object({
    question: joi_1.default.string().required(),
    answer: joi_1.default.string().required(),
    puntuation: joi_1.default.string().required(),
    evaluations: joi_1.default.string().uuid().required()
});
//# sourceMappingURL=create-question-answer.js.map