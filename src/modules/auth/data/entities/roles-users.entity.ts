import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { RolesEntity } from "./roles.entity"
import { UserEntity } from "./user.entity"

@Entity({ name: "roles_user" })
export class RolesUsersEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => RolesEntity, (roles) => roles.rolesUsers)
  roles!: RolesEntity;

  @ManyToOne(
    () => UserEntity,
    ( users ) => users.rolesUsers
  )
  users!: UserEntity
}
