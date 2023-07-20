import { PlanPPPEntity } from '../../data/entities'
import { CreatePlanPPPDto } from '../dtos'

export abstract class PlanPPPRepository {

    abstract findAll(): Promise< PlanPPPEntity[] >
    abstract findById(id: string): Promise< PlanPPPEntity | null >
    abstract create(createPlanPPPDto: CreatePlanPPPDto): Promise< PlanPPPEntity >
    abstract save(planPPPCreated: PlanPPPEntity): Promise< PlanPPPEntity >

}
