import { AppDataSource } from '../../../../config/database'
import { PlanRepository } from '../../domain/repositories/'

import { PlanPPPEntity } from '../entities'

export class PlanRepositoryImpl implements PlanRepository {

    private planRepository = AppDataSource.getRepository( PlanPPPEntity )
    
    constructor() { }

    findAll(): Promise<PlanPPPEntity[]> {
        return this.planRepository.find()
    }

}