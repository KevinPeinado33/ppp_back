import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PPPEntity } from "./ppp.entity";
import { QuestionAnswerEntity } from "./question-answer.entity";

@Entity({ name: 'evaluation'})
export class EvaluationEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({type: 'varchar', name: 'type'})
    type!: string

    @Column({type: 'varchar', nullable: true})
    score!: string

    @Column({type: 'varchar', name: 'observation_advisor', nullable: true})
    observationAdvisor!: string

    @Column({type: 'varchar', name: 'observation_business_mentor', nullable: true})
    observationBusinessMentor!: string

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at',
    })
    createdAt!: Date

    @CreateDateColumn({
        type: 'timestamptz',
        name: 'date_end'
    })
    dateEnd!: Date

    @Column({ type: 'bool', default: true})
    status!: boolean

    @Column({ type: 'varchar', name: 'directed_to'})
    directedTo!: string

    @Column({ type: 'integer', name: 'number_attempts', nullable: true})
    numberAttempts!: number

    /**
     * Relaciones entre tablas
     */

    @ManyToOne(
        () => PPPEntity,
        ( ppp ) => ppp.evaluations
    )
    ppp!: PPPEntity

    @OneToMany(
        () => QuestionAnswerEntity,
        (question) => question.evaluations
    )
    questionAnswer!: QuestionAnswerEntity[]
}