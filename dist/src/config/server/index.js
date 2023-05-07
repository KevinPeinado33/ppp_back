"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const auth_route_1 = __importDefault(require("../../modules/auth/presentation/routes/auth.route"));
const student_router_1 = __importDefault(require("../../modules/student/presentation/routers/student.router"));
const database_1 = require("../database");
const swagger_1 = require("../swagger");
class AppServer {
    constructor() {
        this.paths = {
            auth: '/api/auth',
            student: '/api/student'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`🏃‍♂️ Server is already on port:${this.port}.`);
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(swagger_1.PATH_SWAGGER, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup((0, swagger_jsdoc_1.default)(swagger_1.options)));
        console.log(`📄 Swagger is already on http://localhost:${this.port}${swagger_1.PATH_SWAGGER}`);
    }
    async dbConnection() {
        try {
            await (0, database_1.dbConnection)();
            console.log('✅ DataBase is connected.');
        }
        catch (error) {
            throw new Error(error);
        }
    }
    routes() {
        this.app.use(this.paths.auth, auth_route_1.default);
        this.app.use(this.paths.student, student_router_1.default);
    }
}
exports.AppServer = AppServer;
//# sourceMappingURL=index.js.map