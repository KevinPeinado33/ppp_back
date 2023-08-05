import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'

import { PPPEntity } from '../../../ppp/data/entities'

@Entity({ name: 'students' })
export class StudentEntity {

    @PrimaryColumn({ type: 'varchar' })
    code!: string

    @Column({ type: 'integer' })
    cycle!: number

    @Column({ type: 'integer', name:'intership_hours' })
    intershipHours!: number

    @Column({ type: 'varchar', name: 'name_cv' })
    nameCv!: string

    @Column({ type: 'varchar', name: 'url_cv' })
    urlCv!: string
    
    @Column({ type: 'float', name: 'final_rate', nullable:true })
    finalRate!: number
    
    @Column({ type: 'varchar', name: 'plan_ppp', nullable: true })
    planPPP!: string
    
    @Column({ type: 'varchar', unique: true, name: 'user_id' })
    userId!: string

    /**
     * Relaciones entre tablas
     */
    @OneToMany(
        () => PPPEntity,
        ( ppp ) => ppp.student
    )
    ppp!: PPPEntity[]


}
