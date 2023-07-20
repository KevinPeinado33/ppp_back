import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { PlanPPPEntity, TypeDocumentEntity } from '.'

@Entity({ name: 'plan_documents' })
export class PlanDocumentEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 150 })
    @Index({ unique: true })
    name!: string

    @Column({ type: 'varchar', name: 'url_document', length: 500 })
    urlDocument!: string

    @Column({ type: 'varchar', length: 300 })
    description!: string

    @Column({ type: 'bool', default: true })
    status!: boolean

    /**
     * Relaciones con tablas
     */
    @ManyToOne(
        () => TypeDocumentEntity,
        ( type ) => type.planDocuments
    )
    type!: TypeDocumentEntity

    @ManyToOne(
        () => PlanPPPEntity,
        ( planPPP ) => planPPP.planDocuments
    )
    planPPP!: PlanPPPEntity

}