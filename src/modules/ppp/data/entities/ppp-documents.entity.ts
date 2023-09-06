import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PPPEntity } from "./ppp.entity";
import { CommentDocumentEntity } from "./comment_document.entity";

@Entity ({ name: 'ppp_documents' })

export class PPPDocumentsEntity{

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', name: 'type'})
    type!: string

    @Column({ type: 'varchar'})
    name!: string

    @Column({ type: 'varchar', name:'url_document', length: 500 })
    urlDocument!: string

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'date_upload'
    })
    dateUpload!: Date

    /**
     * en string poque tendra al rededor 
     * de 3 estados
     */
    @Column({ type: 'varchar', default: 'en espera'})
    status!: string

    /**
     * Relaciones entre tablas
     */

    @ManyToOne(
        () => PPPEntity,
        (ppp) => ppp.pppDocuments
    )
    ppp!: PPPEntity

    @OneToMany(
        () => CommentDocumentEntity,
        (comments) => comments.pppDocument
    )
    comments!: CommentDocumentEntity[]

}