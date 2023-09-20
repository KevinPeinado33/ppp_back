import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PPPDocumentsEntity } from './'

@Entity('comments_document')
export class CommentDocumentEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 500 })
    comment!: string

    @OneToMany(
        () => PPPDocumentsEntity,
        ( pppDocument ) => pppDocument.comments
    )
    pppDocument!: PPPDocumentsEntity
}
