import { Entity, OneToMany } from 'typeorm'
import { PPPDocumentsEntity } from './'

@Entity('comments_document')
export class CommentDocumentEntity {
    id!: string

    comment!: string

    @OneToMany(
        () => PPPDocumentsEntity,
        ( pppDocument ) => pppDocument.comments
    )
    pppDocument!: PPPDocumentsEntity
}
