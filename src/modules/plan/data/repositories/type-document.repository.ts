import { AppDataSource } from '../../../../config/database'

import { TypeDocumentRepository } from '../../domain/repositories'
import { TypeDocumentEntity } from '../entities'

export class TypeDocumentRepositoryImpl implements TypeDocumentRepository {
    
    private typeDocumentRepository = AppDataSource.getRepository( TypeDocumentEntity )

    constructor( ) { }
    
    async findOneById(id: string): Promise<TypeDocumentEntity | null> {
        return await this.typeDocumentRepository.findOneBy({ id })
    }

    async findAll(): Promise<TypeDocumentEntity[]> {
        return await this.typeDocumentRepository.find()
    }
    
}