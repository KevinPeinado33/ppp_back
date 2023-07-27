"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class StudentRepositoryImpl {
    constructor() {
        this.repository = database_1.AppDataSource.getRepository(entities_1.StudentEntity);
    }
    async getAllStudents() {
        return await this.repository.find();
    }
}
exports.StudentRepositoryImpl = StudentRepositoryImpl;
//# sourceMappingURL=student.repository.js.map