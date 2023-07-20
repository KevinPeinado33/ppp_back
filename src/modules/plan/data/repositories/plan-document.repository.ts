import { AppDataSource } from '../../../../config/database'

import { PlanDocumentRepository } from '../../domain/repositories'
import { PlanDocumentEntity } from '../entities'

export class PlanDocumentRepositoryImpl implements PlanDocumentRepository {

    private planDocumentRepository = AppDataSource.getRepository( PlanDocumentEntity )

    constructor( ) { }

    async create(newDocument: PlanDocumentEntity): Promise<PlanDocumentEntity> {
        return await this.planDocumentRepository.create( newDocument )
    }

    async save(documentCreated: PlanDocumentEntity): Promise<PlanDocumentEntity> {
        return await this.planDocumentRepository.save( documentCreated )
    }

}