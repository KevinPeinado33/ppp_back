import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StudentEntity } from "../../../student/data/entities";
import { PlanPPPEntity } from "../../../plan/data/entities";
import { UserEntity } from "../../../auth/data/entities";
import { EvaluationEntity } from "./evaluation.entity";
import { PPPDocumentsEntity } from "./ppp-documents.entity";

@Entity ({ name: 'ppp'})
export class PPPEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type:'integer', name:'intership_hours'})
    intershipHours!: number

    @Column({ type: 'text', array: true })
    area!: string

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'started_date'
    })
    startedDate!: Date

    @CreateDateColumn({
        type: 'timestamptz',
        name: 'finished_date'
    })
    finishedDate!: Date

    @Column({ type: 'integer'})
    rate!: number

    @Column({ type: 'bool', default: true})
    status!: boolean

    /**
     * Relaciones entre tablas
     */
    @ManyToOne(
        () => StudentEntity,
        (student) => student.ppp
    )
    student!: StudentEntity

    @ManyToOne(
        () => PlanPPPEntity,
        (plan) => plan.ppp
    )
    plan!: PlanPPPEntity

    @ManyToOne(
        () => UserEntity,
        (advisor) => advisor.ppp
    )
    advisor!: UserEntity

    @OneToMany(
        () => EvaluationEntity,
        ( evaluation ) => evaluation.ppp
    )
    evaluations!: EvaluationEntity[]

    @OneToMany(
        () => PPPDocumentsEntity,
        (pppDocuments) => pppDocuments.ppp
    )
    pppDocuments!: PPPDocumentsEntity[]
}