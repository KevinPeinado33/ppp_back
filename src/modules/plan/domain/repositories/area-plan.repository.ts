import { AreaPlanEntity } from '../../data/entities'

export abstract class AreaPlanRepository {

    abstract create(createAreaPlan: AreaPlanEntity) : Promise< AreaPlanEntity >
    abstract save(areaPlanCreated: AreaPlanEntity)  : Promise< AreaPlanEntity >
    abstract findById(id: string)                   : Promise< AreaPlanEntity | null >
    abstract findAll(idPlan: string)                : Promise< AreaPlanEntity[] >

}