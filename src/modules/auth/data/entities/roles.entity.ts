import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"

import { AccessRoleEntity, RoleUserEntity } from "./"

@Entity({ name: "roles" })
export class RolesEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ type: "varchar", length: 100 })
  name!: string

  @Column({ type: "varchar", length: 400 })
  description!: string

  @Column({ type: "bool", default: true })
  status!: boolean

  @OneToMany(() => RoleUserEntity, (rolesUser) => rolesUser.role)
  rolesUsers!: RoleUserEntity[]

  @OneToMany(() => AccessRoleEntity, (accessRole) => accessRole.access)
  accessRoles!: AccessRoleEntity[]
}
