"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const studentSchema = new mongoose_1.Schema({
    code: { type: String, require: true, unique: true },
    cycle: { type: String, require: true },
    intershipHours: { type: mongoose_1.Schema.Types.Number, require: true, default: 0 },
    nameCv: { type: String, require: true },
    urlCv: { type: String, require: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', require: true, unique: true }
}, {
    timestamps: true
});
studentSchema.index({ code: 1 }, { unique: true });
const Student = mongoose_1.default.model('Student', studentSchema);
exports.default = Student;
//# sourceMappingURL=student.model.js.map