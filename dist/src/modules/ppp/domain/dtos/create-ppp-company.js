"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyPPPDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreateCompanyPPPDto {
    constructor() { }
}
exports.CreateCompanyPPPDto = CreateCompanyPPPDto;
CreateCompanyPPPDto.schema = joi_1.default.object({
    name: joi_1.default.string().required(),
    area: joi_1.default.string().required(),
    ruc: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
    bussinessMentor: joi_1.default.string().required(),
    dniMentor: joi_1.default.string().required(),
    cellphoneMentor: joi_1.default.string().required(),
    emailMentor: joi_1.default.string().required(),
    academicDegreeMentor: joi_1.default.string().required(),
    status: joi_1.default.boolean().required(),
    ppp: joi_1.default.string().uuid().required()
});
//# sourceMappingURL=create-ppp-company.js.map