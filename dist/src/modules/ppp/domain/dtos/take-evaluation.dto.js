"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeEvaluationDto = void 0;
const joi_1 = __importDefault(require("joi"));
class TakeEvaluationDto {
    constructor() { }
}
exports.TakeEvaluationDto = TakeEvaluationDto;
TakeEvaluationDto.schema = joi_1.default.object({
    score: joi_1.default.number(),
    observationAdvisor: joi_1.default.string(),
    observationBusinessMentor: joi_1.default.string(),
    status: joi_1.default.boolean(),
    numberAttempts: joi_1.default.number(),
    answers: joi_1.default.array().items(joi_1.default.object({
        id: joi_1.default.string().uuid().required(),
        answer: joi_1.default.string(),
        puntuation: joi_1.default.number()
    }))
});
//# sourceMappingURL=take-evaluation.dto.js.map