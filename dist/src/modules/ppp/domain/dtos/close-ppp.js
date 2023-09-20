"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosePppDto = void 0;
const joi_1 = __importDefault(require("joi"));
class ClosePppDto {
    constructor() { }
}
exports.ClosePppDto = ClosePppDto;
ClosePppDto.schema = joi_1.default.object({
    studentID: joi_1.default.string().required(),
    intershipHours: joi_1.default.number().required(),
    rate: joi_1.default.number().required(),
    status: joi_1.default.boolean()
});
//# sourceMappingURL=close-ppp.js.map