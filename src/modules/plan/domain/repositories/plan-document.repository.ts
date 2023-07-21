import { PlanDocumentEntity } from '../../data/entities'

export abstract class PlanDocumentRepository {

    abstract create(newDocument: PlanDocumentEntity)   : Promise< PlanDocumentEntity >
    abstract save(documentCreated: PlanDocumentEntity) : Promise< PlanDocumentEntity >

}