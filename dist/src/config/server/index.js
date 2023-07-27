"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppServer = void 0;
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const database_1 = require("../database");
const swagger_1 = require("../swagger");
const auth_route_1 = __importDefault(require("../../modules/auth/presentation/routes/auth.route"));
const student_router_1 = __importDefault(require("../../modules/student/presentation/routers/student.router"));
const plan_route_1 = __importDefault(require("../../modules/plan/presentation/routes/plan.route"));
const user_route_1 = __importDefault(require("../../modules/auth/presentation/routes/user.route"));
const ppp_route_1 = __importDefault(require("../../modules/ppp/presentation/routes/ppp.route"));
class AppServer {
    constructor() {
        this.paths = {
            auth: '/api/auth',
            student: '/api/student',
            plan: '/api/plan',
            user: '/api/user',
            ppp: '/api/ppp'
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
            await database_1.AppDataSource.initialize();
            console.log('✅ DataBase is connected.');
        }
        catch (error) {
            console.log(error);
        }
    }
    routes() {
        this.app.use(this.paths.auth, auth_route_1.default);
        this.app.use(this.paths.student, student_router_1.default);
        this.app.use(this.paths.plan, plan_route_1.default);
        this.app.use(this.paths.user, user_route_1.default);
        this.app.use(this.paths.ppp, ppp_route_1.default);
    }
}
exports.AppServer = AppServer;
//# sourceMappingURL=index.js.map