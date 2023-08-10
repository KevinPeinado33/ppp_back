"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePPPDocumentDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreatePPPDocumentDto {
    constructor() { }
}
exports.CreatePPPDocumentDto = CreatePPPDocumentDto;
CreatePPPDocumentDto.schema = joi_1.default.object({
    type: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    urlDocument: joi_1.default.string().uri().required(),
    dateUpload: joi_1.default.date().required(),
    status: joi_1.default.string().required(),
    ppp: joi_1.default.string().uuid().required()
});
//# sourceMappingURL=create-ppp-document.js.map