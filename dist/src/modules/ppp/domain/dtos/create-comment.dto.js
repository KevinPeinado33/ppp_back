"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentDocumentDto = void 0;
const joi_1 = __importDefault(require("joi"));
class CreateCommentDocumentDto {
}
exports.CreateCommentDocumentDto = CreateCommentDocumentDto;
CreateCommentDocumentDto.schema = joi_1.default.object({
    comment: joi_1.default.string().optional(),
    statusDocument: joi_1.default.string().optional()
});
//# sourceMappingURL=create-comment.dto.js.map