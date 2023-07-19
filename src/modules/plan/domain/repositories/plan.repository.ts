import { PlanPPPEntity } from '../../data/entities'

export abstract class PlanRepository {

    abstract findAll(): Promise< PlanPPPEntity[] >

}
