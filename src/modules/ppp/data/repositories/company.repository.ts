import { AppDataSource } from '../../../../config/database';
import { CompanyRepositroy } from '../../domain/repositories'
import { CompanyEntity } from '../entities';

export class CompanyRepositoryImpl implements CompanyRepositroy {

    private companyRepository = AppDataSource.getRepository(CompanyEntity)

    constructor() { }

    async save(saveCompany: CompanyEntity): Promise<CompanyEntity> {
        return await this.companyRepository.save(saveCompany)
    }
    async create(createCompany: CompanyEntity): Promise<CompanyEntity> {
        return await this.companyRepository.create(createCompany)
    }

}