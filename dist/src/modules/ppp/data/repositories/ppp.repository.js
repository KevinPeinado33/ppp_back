"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPPRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class PPPRepositoryImpl {
    constructor() {
        this.pppRepository = database_1.AppDataSource.getRepository(entities_1.PPPEntity);
    }
    async save(ppp) {
        return await this.pppRepository.save(ppp);
    }
    async findOnebyId(id) {
        return await this.pppRepository.findOneBy({ id });
    }
    async findLastOneWithCompanyByStudent(studentCode) {
        return await this.pppRepository
            .createQueryBuilder('ppp')
            .innerJoinAndSelect('ppp.student', 'student', 'student.code = :studentCode', { studentCode })
            .leftJoinAndSelect('ppp.company', 'company')
            .orderBy('ppp.startedDate', 'DESC')
            .getOne();
    }
}
exports.PPPRepositoryImpl = PPPRepositoryImpl;
//# sourceMappingURL=ppp.repository.js.map