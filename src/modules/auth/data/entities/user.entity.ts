import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm'
import { RolesUsersEntity } from './roles-users.entity'

@Entity({ name: 'users' })
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column({ type: 'varchar', unique: true, name: 'user_name' })
  userName!: string

  @Column({ type: 'varchar' })
  password!: string

  @Column({ type: 'varchar', name: 'first_name' })
  firstName!: string

  @Column({ type: 'varchar', name: 'last_name' })
  lastName!: string

  @Column({ type: 'varchar' })
  email!: string

  @Column({ type: 'varchar' })
  cellphone!: string

  @Column({ type: 'varchar' })
  area!: string

  @Column({ type: 'integer', name: 'num_students' })
  numStudents!: number

  @Column({ type: 'varchar', name: 'url_profile' })
  urlProfile!: string

  @Column({ type: 'boolean' })
  status!: boolean

  @OneToMany(
    () => RolesUsersEntity,
    (rolesUser) => rolesUser.roles
  )
  rolesUsers!: RolesUsersEntity
}
