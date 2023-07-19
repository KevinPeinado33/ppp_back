import { Entity, Column, PrimaryColumn } from 'typeorm'

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

    @Column({ type: 'integer', name: 'final_rate' })
    finalRate!: number

    @Column({ type: 'varchar', unique: true, name: 'user_id' })
    userId!: string

}
