"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../modules/auth/data/entities");
const entities_2 = require("../../modules/student/data/entities");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        entities_1.UserEntity,
        entities_2.StudentEntity
    ],
    logging: false,
    synchronize: true
});
//# sourceMappingURL=index.js.map