"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRegisterAceptanceDto = void 0;
const joi_1 = __importDefault(require("joi"));
class UpdateRegisterAceptanceDto {
    constructor() { }
}
exports.UpdateRegisterAceptanceDto = UpdateRegisterAceptanceDto;
UpdateRegisterAceptanceDto.schema = joi_1.default.object({
    area: joi_1.default.string().required(),
    startedDate: joi_1.default.date().required(),
    finishedDate: joi_1.default.date().required()
});
//# sourceMappingURL=update-register-aceptance.js.map