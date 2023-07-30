import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { AreaPlanEntity } from './'

@Entity({ name: 'question_evaluations' })
export class QuestionEvaluationEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar' })
    @Index({ unique: true })
    question!: string

    @Column({ type: 'bool' })
    status!: boolean

    @Column({ type: 'varchar' })
    type!: string

    @ManyToOne(
        () => AreaPlanEntity,
        ( area ) => area.questionEvaluations
    )
    area!: AreaPlanEntity


}