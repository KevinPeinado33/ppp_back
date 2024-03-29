import { Entity, Column, PrimaryColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm'

import { PPPEntity } from '../../../ppp/data/entities'
import { UserEntity } from '../../../auth/data/entities'

@Entity({ name: 'students' })
export class StudentEntity {

    @PrimaryColumn({ type: 'varchar' })
    code!: string

    @Column({ type: 'integer' })
    cycle!: number

    @Column({ type: 'integer', name:'intership_hours', nullable: true })
    intershipHours!: number

    @Column({ type: 'varchar', name: 'name_cv' })
    nameCv!: string

    @Column({ type: 'varchar', name: 'url_cv' })
    urlCv!: string
    
    @Column({ type: 'float', name: 'final_rate', nullable:true })
    finalRate!: number
    
    /**
     * Se agrego esto para hacer las consultas de manera 
     * mas rapido
     */
    @Column({ type: 'varchar', name: 'plan_ppp', nullable: true })
    planPPP!: string

    
    /**
     * Relaciones entre tablas
     */
    @OneToMany(
        () => PPPEntity,
        ( ppp ) => ppp.student
    )
    ppp!: PPPEntity[]

    @OneToOne(
        () => UserEntity,
        ( user ) => user.student,
    )
    @JoinColumn()
    user!: UserEntity

}
