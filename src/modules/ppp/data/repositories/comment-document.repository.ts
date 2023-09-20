import { AppDataSource } from '../../../../config/database'
import { CommentDocumentEntity } from '../../data/entities'
import { CommentDocumentRepository } from '../../domain/repositories'

export class CommentDocumentRepositoryImpl implements CommentDocumentRepository {

    private readonly repository = AppDataSource.getRepository(  CommentDocumentEntity )

    constructor() { }

    async create(payload: CommentDocumentEntity): Promise<CommentDocumentEntity> {
        return this.repository.create( payload )
    }
    async save(payload: CommentDocumentEntity): Promise<CommentDocumentEntity> {
        return this.repository.save( payload )
    }

}