import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { RolesEntity } from "./roles.entity"

@Entity({ name: "roles_user" })
export class RolesUsersEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => RolesEntity, (roles) => roles.rolesUsers)
  roles!: RolesEntity;
}
