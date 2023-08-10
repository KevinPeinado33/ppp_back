"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRepositoryImpl = void 0;
<<<<<<< HEAD
class CompanyRepositoryImpl {
=======
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class CompanyRepositoryImpl {
    constructor() {
        this.companyRepository = database_1.AppDataSource.getRepository(entities_1.CompanyEntity);
    }
    async save(saveCompany) {
        return await this.companyRepository.save(saveCompany);
    }
    async create(createCompany) {
        return await this.companyRepository.create(createCompany);
    }
>>>>>>> develop
}
exports.CompanyRepositoryImpl = CompanyRepositoryImpl;
//# sourceMappingURL=company.repository.js.map