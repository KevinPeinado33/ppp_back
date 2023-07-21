import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { PlanPPPEntity, QuestionEvaluationEntity } from './'

@Entity({ name: 'area_plan' })
export class AreaPlanEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', unique: true, length: 120 })
    @Index({ unique: true })
    name!: string

    @Column({ type: 'varchar', length: 200 })
    description!: string

    @Column({ type: 'bool', default: true })
    status!: boolean

    /**
     * Relaciones entre tablas
     */
    @ManyToOne( 
        () => PlanPPPEntity,
        ( plan ) => plan.areaPlans
    )
    plan!: PlanPPPEntity
    
    @OneToMany(
        () => QuestionEvaluationEntity,
        ( question ) => question.area
    )
    questionEvaluations!: QuestionEvaluationEntity[]

}