import { CommentDocumentEntity } from '../../data/entities'

export abstract class CommentDocumentRepository {

    abstract create(payload: CommentDocumentEntity): Promise<CommentDocumentEntity>
    abstract save(payload: CommentDocumentEntity): Promise<CommentDocumentEntity>

}