import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm'

import { PlanPPPEntity } from '../../../plan/data/entities'
import { PPPEntity } from '../../../ppp/data/entities'
import { StudentEntity } from '../../../student/data/entities'
import { RoleUserEntity } from './'
import { NotificationsEntity, ShareEntity } from '../../../notificactions/data/entities'

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

  @Column({ type: 'integer', name: 'num_students', default: 0 })
  numStudents!: number

  @Column({ type: 'varchar', name: 'url_profile' })
  urlProfile!: string

  @Column({ type: 'boolean', default: true })
  status!: boolean

  /**
   * Relaciones entre tablas
   */
  @OneToMany(
    () => RoleUserEntity,
    (rolesUser) => rolesUser.role
  )
  roleUser!: RoleUserEntity[]

  @OneToMany(
    () => PlanPPPEntity,
    ( planPPP ) => planPPP.commited
  )
  planPPPs!: PlanPPPEntity[]

  @OneToMany(
    () => PPPEntity,
    ( ppp ) => ppp.advisor 
  )
  ppp!: PPPEntity[]

  @OneToOne(
    () => StudentEntity,
    ( student ) => student.user,
  )
  student!: StudentEntity

  @OneToMany(
    () => NotificationsEntity,
    (notification) => notification.property
  )
  notifications!: NotificationsEntity[]

  @OneToMany(
    () => ShareEntity,
    (share) => share.address
  )
  share!: ShareEntity[]

}
