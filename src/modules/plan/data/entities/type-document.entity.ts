import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PlanDocumentEntity } from './plan-document.entity'

@Entity({ name: 'type_documents' })
export class TypeDocumentEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 150 })
    @Index({ unique: true })
    name!: string

    @Column({ type: 'varchar', length: 300 })
    description!: string

    @Column({ type: 'bool', default: true })
    status!: boolean

    /**
     * Relaciones con tablas
     */
    @OneToMany(
        () => PlanDocumentEntity,
        ( planDocument ) => planDocument.type
    )
    planDocuments!: PlanDocumentEntity[]

}