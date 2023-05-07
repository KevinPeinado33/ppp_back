"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = async () => {
    try {
        // await mongoose.connect( process.env.MONGODB_CNN ?? '')
        mongoose_1.default.connect(process.env.MONGODB_CNN || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error on moounted db: ${error}`);
    }
};
exports.dbConnection = dbConnection;
//# sourceMappingURL=index.js.map