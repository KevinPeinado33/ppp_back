"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class StudentRepositoryImpl {
    constructor() {
        this.STUDENT_PROCESS_END = 0;
        this.repository = database_1.AppDataSource.getRepository(entities_1.StudentEntity);
    }
    async getAllStudents(planPPP) {
        return await this.repository.findBy({ planPPP });
    }
    async save(student) {
        return await this.repository.save(student);
    }
    async findStudentsSemester(cycle) {
        return await this.repository.findBy({ cycle });
    }
    async findStudentsProcessEnd(finalRate) {
        const studentQry = this.repository.createQueryBuilder('student');
        if (finalRate === this.STUDENT_PROCESS_END) {
            studentQry.where('student.final_rate <> 0');
        }
        if (finalRate !== this.STUDENT_PROCESS_END) {
            studentQry.where('student.final_rate = 0');
        }
        studentQry.innerJoinAndSelect('student.user', 'user');
        return await studentQry.getMany();
    }
    async findOneByCode(codeStudent, withRelation = true) {
        if (withRelation) {
            return await this
                .repository
                .findOne({
                where: { code: codeStudent },
                relations: ['user']
            });
        }
        return await this.repository.findOneBy({ code: codeStudent });
    }
}
exports.StudentRepositoryImpl = StudentRepositoryImpl;
//# sourceMappingURL=student.repository.js.map