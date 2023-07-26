import { DataSource } from 'typeorm'

import {
  AccessEntity,
  AccessRoleEntity,
  UserEntity,
} from '../../modules/auth/data/entities'
import { StudentEntity } from '../../modules/student/data/entities'
import {
  AreaPlanEntity,
  PlanDocumentEntity,
  PlanPPPEntity,
  QuestionEvaluationEntity,
  TypeDocumentEntity,
} from '../../modules/plan/data/entities'
import { RolesEntity } from '../../modules/auth/data/entities/roles.entity'
import { RoleUserEntity } from '../../modules/auth/data/entities/roles-users.entity'
import { PPPEntity } from '../../modules/ppp/data/entities'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    UserEntity,
    PlanPPPEntity,
    StudentEntity,
    AreaPlanEntity,
    PlanDocumentEntity,
    QuestionEvaluationEntity,
    TypeDocumentEntity,

    // Auth
    AccessEntity,
    AccessRoleEntity,
    RolesEntity,
    RoleUserEntity,
    PPPEntity,
  ],
  logging: false,
  synchronize: false,
})
