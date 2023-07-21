"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlanDocumentDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreatePlanDocumentDto {
    constructor() { }
}
exports.CreatePlanDocumentDto = CreatePlanDocumentDto;
CreatePlanDocumentDto.schema = joi_1.default.object({
    name: joi_1.default.string().required(),
    urlDocument: joi_1.default.string().uri().required(),
    description: joi_1.default.string().required(),
    status: joi_1.default.boolean(),
    type: joi_1.default.string().uuid().required(),
    planPPP: joi_1.default.string().uuid().required()
});
//# sourceMappingURL=create-plan-document.dto.js.map