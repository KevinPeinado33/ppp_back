import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PPPEntity } from "./ppp.entity";

@Entity({ name: 'evaluation'})
export class EvaluationEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({type: 'varchar', name: 'type'})
    type!: string

    @Column({type: 'varchar'})
    score!: string

    @Column({type: 'varchar', name: 'observation_advisor'})
    observationAdvisor!: string

    @Column({type: 'varchar', name: 'observation_business_mentor'})
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

    @Column({ type: 'integer', name: 'number_attempts'})
    numberAttempts!: number

    /**
     * Relaciones entre tablas
     */

    @ManyToOne(
        () => PPPEntity,
        ( ppp ) => ppp.evaluations
    )
    ppp!: PPPEntity
}