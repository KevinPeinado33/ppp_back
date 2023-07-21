"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlanPPPDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreatePlanPPPDto {
    constructor() { }
}
exports.CreatePlanPPPDto = CreatePlanPPPDto;
CreatePlanPPPDto.schema = joi_1.default.object({
    name: joi_1.default.string().required(),
    intershipHours: joi_1.default.number().required(),
    startDate: joi_1.default.date(),
    endDate: joi_1.default.date().required(),
    bannerUrl: joi_1.default.array().required(),
    status: joi_1.default.boolean(),
    commited: joi_1.default.string().uuid().required(),
});
//# sourceMappingURL=create-plan-ppp.dto.js.map