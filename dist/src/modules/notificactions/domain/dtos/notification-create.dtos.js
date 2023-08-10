"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsDto = void 0;
const joi_1 = __importDefault(require("joi"));
class NotificationsDto {
    constructor() { }
}
exports.NotificationsDto = NotificationsDto;
NotificationsDto.schema = joi_1.default.object({
    property: joi_1.default.string().required(),
    title: joi_1.default.string().required(),
    message: joi_1.default.string().required(),
    share: joi_1.default.array().items(joi_1.default.string().uuid()).required()
});
//# sourceMappingURL=notification-create.dtos.js.map