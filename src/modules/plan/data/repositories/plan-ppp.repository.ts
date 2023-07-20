import { AppDataSource } from '../../../../config/database'
import { CreatePlanPPPDto } from '../../domain/dtos'
import { PlanPPPRepository } from '../../domain/repositories'

import { PlanPPPEntity } from '../entities'

export class PlanPPPRepositoryImpl implements PlanPPPRepository {

    private planRepository = AppDataSource.getRepository( PlanPPPEntity )
    
    constructor() { }
    
    async findById(id: string): Promise<PlanPPPEntity | null> {
        return await this.planRepository.findOneBy({ id })
    }
    
    async findAll(): Promise<PlanPPPEntity[]> {
        return await this.planRepository.find()
    }

    async create(createPlanPPPDto: CreatePlanPPPDto): Promise<PlanPPPEntity> {
        return await this.planRepository.create( createPlanPPPDto )
    }

    async save(planPPPCreated: PlanPPPEntity): Promise<PlanPPPEntity> {
        return await this.planRepository.save( planPPPCreated )
    }

}