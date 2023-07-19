import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { AccessRoleEntity } from './'

@Entity({ name: 'access' })
export class AccessEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 200 })
    path!: string

    @Column({ type: 'varchar', length: 100 })
    name!: string

    @Column({ type: 'varchar', length: 300 })
    icon!: string
    
    @Column({ type: 'bool', default: true })
    status!: boolean

    /**
     * Relaciones entre tablas
     */
    @OneToMany(
        () => AccessRoleEntity,
        ( accessRole ) =>  accessRole.access
    )
    accessRoles!: AccessRoleEntity[]

}