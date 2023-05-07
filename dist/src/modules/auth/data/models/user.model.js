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
const userSchema = new mongoose_1.Schema({
    dni: { type: String, require: true, unique: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    faculty: { type: String, require: false },
    schoolName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    cellphone: { type: String, require: true },
    area: { type: String, require: false },
    numStudents: { type: mongoose_1.Schema.Types.Number, require: false },
    role: {
        type: String,
        enum: {
            values: ['comite', 'supervisor', 'practicante'],
            message: '{VALUE} no es un rol valido',
            default: 'practicante',
            required: true
        }
    }
}, {
    timestamps: true
});
userSchema.index({ dni: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true });
const User = mongoose_1.default.models.User || (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map