import { AppDataSource } from '../../../../config/database'

import { AreaPlanRepository } from '../../domain/repositories'
import { AreaPlanEntity } from '../entities'

export class AreaPlanRepositoryImpl implements AreaPlanRepository {

    private areaPlanRepository = AppDataSource.getRepository( AreaPlanEntity )    
    
    constructor() { }
    
    async findById(id: string): Promise<AreaPlanEntity | null> {
        return await this.areaPlanRepository.findOneBy({ id })
    }
    
    async create(createAreaPlan: AreaPlanEntity): Promise< AreaPlanEntity > {
        return await this.areaPlanRepository.create( createAreaPlan )
    }
    
    async save(areaPlanCreated: AreaPlanEntity): Promise< AreaPlanEntity > {
        return await this.areaPlanRepository.save( areaPlanCreated )
    }
    
    async findAll(idPlan: string): Promise<AreaPlanEntity[]> {
        return await this.areaPlanRepository.findBy({ plan: { id: idPlan }})
    }
    
}