import { PlanPPPEntity } from '../../data/entities'

export abstract class PlanPPPRepository {

    abstract findAll(): Promise< PlanPPPEntity[] >
    abstract findById(id: string): Promise< PlanPPPEntity | null >
    abstract create(newPlanPPP: PlanPPPEntity): Promise< PlanPPPEntity >
    abstract save(planPPPCreated: PlanPPPEntity): Promise< PlanPPPEntity >

}
