import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { AccessEntity } from "./"
import { RolesEntity } from "./roles.entity"

@Entity({ name: "access_roles" })
export class AccessRoleEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  /**
   * Relaciones con las tablas
   */
  @ManyToOne(() => AccessEntity, (access) => access.accessRoles)
  access!: AccessEntity;

  @ManyToOne(() => RolesEntity, (role) => role.accessRole)
  role!: RolesEntity;
}
