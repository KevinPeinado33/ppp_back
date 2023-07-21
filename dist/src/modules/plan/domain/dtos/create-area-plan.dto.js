"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAreaPlanDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreateAreaPlanDto {
    constructor() { }
}
exports.CreateAreaPlanDto = CreateAreaPlanDto;
CreateAreaPlanDto.schema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    status: joi_1.default.boolean(),
    plan: joi_1.default.string().uuid().required()
});
//# sourceMappingURL=create-area-plan.dto.js.map