import { AppDataSource } from '../../../../config/database'

import { PlanDocumentRepository } from '../../domain/repositories'
import { PlanDocumentEntity } from '../entities'

export class PlanDocumentRepositoryImpl implements PlanDocumentRepository {

    private planDocumentRepository = AppDataSource.getRepository( PlanDocumentEntity )

    constructor( ) { }

}