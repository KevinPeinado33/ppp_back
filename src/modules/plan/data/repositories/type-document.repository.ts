import { AppDataSource } from '../../../../config/database'

import { TypeDocumentRepository } from '../../domain/repositories'
import { TypeDocumentEntity } from '../entities'

export class TypeDocumentRepositoryImpl implements TypeDocumentRepository {
    
    private typeDocumentRepository = AppDataSource.getRepository( TypeDocumentEntity )

    constructor( ) { }
    
}