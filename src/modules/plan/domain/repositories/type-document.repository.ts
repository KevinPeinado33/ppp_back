import { TypeDocumentEntity } from '../../data/entities'

export abstract class TypeDocumentRepository {

    abstract findOneById(id: string) : Promise< TypeDocumentEntity | null >
    abstract findAll()               : Promise< TypeDocumentEntity[] >
    
}