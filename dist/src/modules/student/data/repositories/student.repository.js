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
    async findCodeStudenById(userId) {
        const studentCode = await this
            .repository
            .createQueryBuilder('student')
            .innerJoinAndSelect('student.user', 'user')
            .where('user.id = :userId', { userId })
            .getRawOne();
        return studentCode;
    }
    async getAllStudents(planPPP) {
        return await this.repository.find({ where: { planPPP }, relations: ['user'] });
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
    async getRatesAndIntershipHoursById(codeStudent) {
        const pruebita = [];
        const qb = await this.repository
            .createQueryBuilder("student")
            .leftJoin("student.ppp", "ppp")
            .where("student.code = :studentCode", { studentCode: codeStudent })
            .select([
            "ppp.rate AS ppp_rate",
            "ppp.intershipHours AS intership_hours",
        ])
            .getRawMany();
        qb.map(x => {
            const mapita = new Map();
            mapita.set('rate', x['ppp_rate']);
            mapita.set('hours', x['intership_hours']);
            pruebita.push(mapita);
        });
        return pruebita;
    }
}
exports.StudentRepositoryImpl = StudentRepositoryImpl;
//# sourceMappingURL=student.repository.js.map