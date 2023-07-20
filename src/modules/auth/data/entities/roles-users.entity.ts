import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { RolesEntity, UserEntity } from './'

@Entity({ name: 'roles_user' })
export class RoleUserEntity {

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ManyToOne(
    () => RolesEntity, 
    (role) => role.rolesUsers
  )
  role!: RolesEntity

  @ManyToOne(
    () => UserEntity,
    ( user ) => user.roleUser
  )
  user!: UserEntity

}
