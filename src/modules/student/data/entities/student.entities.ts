import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity({ name: 'students' })
export default class Student {

    @PrimaryColumn({ type: 'varchar' })
    code!: string

    @Column({ type: 'number' })
    cycle!: number

    @Column({ type: 'number', name:'intership_hours' })
    intershipHours!: number

    @Column({ type: 'varchar', name: 'name_cv' })
    nameCv!: string

    @Column({ type: 'varchar', name: 'url_cv' })
    urlCv!: string

    @Column({ type: 'number', name: 'final_rate' })
    finalRate!: number

    @Column({ type: 'varchar', unique: true, name: 'user_id' })
    userId!: string

}
