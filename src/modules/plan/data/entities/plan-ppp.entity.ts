import { Column, CreateDateColumn, Entity, Index, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { AreaPlanEntity, PlanDocumentEntity } from './'
import { PPPEntity } from '../../../ppp/data/entities'

@Entity({ name: 'plan_ppp' })
export class PlanPPPEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 150 })
    @Index({ unique: true })
    name!: string

    @Column({ type: 'integer', name:'intership_hours' })
    intershipHours!: number

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'start_date'
    })
    startDate!: Date

    @CreateDateColumn({
        type: 'timestamptz',
        name: 'end_date'
    })
    endDate!: Date

    @Column({ type: 'text', name: 'banner_url', array: true })
    bannerUrl!: string[]

    @Column({ type: 'bool', default: true })
    status!: boolean

    // TODO: crear la relacion con el usuario creador
    @Column({ type: 'varchar' })
    @JoinColumn({ name: 'commited' })
    commited!: string


    /**
     * Relaciones entre tablas
     */
    @OneToMany(
        () => AreaPlanEntity,
        ( areaPlan ) => areaPlan.plan
    )
    areaPlans!: AreaPlanEntity[]

    @OneToMany(
        () => PlanDocumentEntity,
        ( planDocument ) => planDocument.planPPP
    )
    planDocuments!: PlanDocumentEntity[]

    @OneToMany(
        () => PPPEntity,
        ( ppp ) => ppp.plan
    )
    ppp!: PPPEntity[]

}
