import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EvaluationEntity } from "./evaluation.entity";

@Entity({ name: 'question_answer'})

export class QuestionAnswerEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar'})
    question!: string

    @Column({ type: 'varchar', nullable: true})
    answer!: string

    @Column({ type: 'integer', nullable: true})
    puntuation!: number

    /**
     * Relaciones entre tablas
     */
    @ManyToOne(
        () => EvaluationEntity,
        ( evaluation ) => evaluation.questionAnswer
    )
    evaluations!: EvaluationEntity
}