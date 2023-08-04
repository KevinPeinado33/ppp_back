import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PPPEntity } from './ppp.entity'

@Entity({ name: 'companies' })
export class CompanyEntity {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 250 })
    name!: string

    @Column({ type: 'varchar', length: 100 })
    area!: string

    @Column({ type: 'varchar', length: 30 })
    ruc!: string

    @Column({ type: 'varchar', length: 300 })
    address!: string

    @Column({ type: 'varchar', length: 250 })
    bussinessMentor!: string
    
    @Column({ type: 'varchar', length: 8 })
    dniMentor!: string

    @Column({ type: 'varchar', length: 9 })
    cellphoneMentor!: string

    @Column({ type: 'varchar', length: 100 })
    emailMentor!: string

    @Column({ type: 'varchar', length: 100 })
    academicDegreeMentor!: string

    @Column({ type: 'bool', default: true })
    status!: boolean
    
    @OneToOne(
        () => PPPEntity,
        ( ppp ) => ppp.company
    )
    @JoinColumn()
    ppp!: PPPEntity
}