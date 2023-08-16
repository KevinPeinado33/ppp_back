"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../modules/student/data/entities");
const entities_2 = require("../../modules/auth/data/entities");
const entities_3 = require("../../modules/plan/data/entities");
const entities_4 = require("../../modules/ppp/data/entities");
const entities_5 = require("../../modules/notificactions/data/entities");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        entities_2.UserEntity,
        entities_3.PlanPPPEntity,
        entities_1.StudentEntity,
        entities_3.AreaPlanEntity,
        entities_3.PlanDocumentEntity,
        entities_3.QuestionEvaluationEntity,
        entities_3.TypeDocumentEntity,
        entities_4.CompanyEntity,
        entities_5.NotificationsEntity,
        entities_5.ShareEntity,
        // Auth
        entities_2.AccessEntity,
        entities_2.AccessRoleEntity,
        entities_2.RolesEntity,
        entities_2.RoleUserEntity,
        entities_4.PPPEntity,
        entities_4.EvaluationEntity,
        entities_4.QuestionAnswerEntity,
        entities_4.PPPDocumentsEntity,
    ],
    logging: false,
    synchronize: true,
});
//# sourceMappingURL=index.js.map