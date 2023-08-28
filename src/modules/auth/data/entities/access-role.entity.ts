import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { AccessEntity, RolesEntity } from './'

@Entity({ name: 'access_roles' })
export class AccessRoleEntity {

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'numeric', default: 0
 })
  numPosition!: number

  /**
   * Relaciones con las tablas
   */
  @ManyToOne(() => AccessEntity, (access) => access.accessRoles)
  access!: AccessEntity

  @ManyToOne(() => RolesEntity, (role) => role.accessRoles)
  role!: RolesEntity
  
}
