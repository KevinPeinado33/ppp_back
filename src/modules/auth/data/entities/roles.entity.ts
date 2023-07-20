import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { AccessRoleEntity } from "./access-role.entity"
import { RolesUsersEntity } from "./roles-users.entity"

@Entity({ name: "roles" })
export class RolesEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100 })
  name!: string;

  @Column({ type: "varchar", length: 400 })
  description!: string;

  @Column({ type: "bool", default: true })
  status!: boolean;

  @OneToMany(() => RolesUsersEntity, (rolesUser) => rolesUser.roles)
  rolesUsers!: RolesUsersEntity[];

  @OneToMany(() => AccessRoleEntity, (accessRole) => accessRole.access)
  accessRole!: AccessRoleEntity[];
}
