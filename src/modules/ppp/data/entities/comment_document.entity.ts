import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PPPDocumentsEntity } from './'

@Entity('comments_document')
export class CommentDocumentEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id!: string

    comment!: string

    @OneToMany(
        () => PPPDocumentsEntity,
        ( pppDocument ) => pppDocument.comments
    )
    pppDocument!: PPPDocumentsEntity
}
