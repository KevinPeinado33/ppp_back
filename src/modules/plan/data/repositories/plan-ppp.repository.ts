import { AppDataSource } from '../../../../config/database'
import { PlanPPPRepository } from '../../domain/repositories'

import { PlanPPPEntity } from '../entities'

export class PlanPPPRepositoryImpl implements PlanPPPRepository {

    private QUERY_GET_BANNERS = 'select ppp.banner_url  from plan_ppp ppp order by start_date desc limit  1'

    private planRepository = AppDataSource.getRepository( PlanPPPEntity )
    
    constructor() { }
    
    async findById(id: string): Promise<PlanPPPEntity | null> {
        return await this.planRepository.findOneBy({ id })
    }
    
    async findAll(): Promise<PlanPPPEntity[]> {
        return await this.planRepository.find()
    }

    async create(newPlanPPP: PlanPPPEntity): Promise<PlanPPPEntity> {
        return await this.planRepository.create( newPlanPPP )
    }

    async save(planPPPCreated: PlanPPPEntity): Promise<PlanPPPEntity> {
        return await this.planRepository.save( planPPPCreated )
    }

    async findBases(): Promise<string[]> {
        return await this.planRepository.query( this.QUERY_GET_BANNERS )
    }

}