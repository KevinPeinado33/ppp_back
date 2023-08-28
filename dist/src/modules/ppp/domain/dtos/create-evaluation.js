"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEvaluationDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreateEvaluationDto {
    constructor() { }
}
exports.CreateEvaluationDto = CreateEvaluationDto;
CreateEvaluationDto.schema = joi_1.default.object({
    type: joi_1.default.string().required(),
    score: joi_1.default.string().required(),
    observationAdvisor: joi_1.default.string(),
    observationBusinessMentor: joi_1.default.string(),
    createdAt: joi_1.default.date().required(),
    dateEnd: joi_1.default.date().required(),
    status: joi_1.default.boolean(),
    directedTo: joi_1.default.string().required(),
    numberAttempts: joi_1.default.number(),
    ppp: joi_1.default.string().uuid().required()
});
//# sourceMappingURL=create-evaluation.js.map