import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { AccessEntity } from './'

@Entity({ name: 'access_roles' })
export class AccessRoleEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id!: string

    /**
     * Relaciones con las tablas
     */
    @ManyToOne(
        () => AccessEntity,
        ( access ) => access.accessRoles
    )
    access!: AccessEntity
    
    
}