"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentImplRepository = void 0;
const models_1 = require("../models");
class StudentImplRepository {
    constructor() { }
    async find() {
        return await models_1.StudentModel.find();
    }
    async create(createStudent) {
        return await models_1.StudentModel.create(createStudent);
    }
    /* async update(updateStudent: StudentUpdateEntity): Promise<IStudent | null> {
        return await StudentModel.updateOne( updateStudent )
    } */
    async findByCode(codeStudent) {
        return await models_1.StudentModel.findOne({ code: codeStudent });
    }
}
exports.StudentImplRepository = StudentImplRepository;
//# sourceMappingURL=student.repository.js.map