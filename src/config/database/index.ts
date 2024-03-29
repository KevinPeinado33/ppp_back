import { DataSource } from 'typeorm'

import { 
  StudentEntity 
} from '../../modules/student/data/entities'
import {
  AccessEntity,
  AccessRoleEntity,
  UserEntity,
  RolesEntity,
  RoleUserEntity
} from '../../modules/auth/data/entities'
import {
  AreaPlanEntity,
  PlanDocumentEntity,
  PlanPPPEntity,
  QuestionEvaluationEntity,
  TypeDocumentEntity,
} from '../../modules/plan/data/entities'
import { 
  PPPDocumentsEntity, 
  PPPEntity, 
  QuestionAnswerEntity, 
  CompanyEntity, 
  EvaluationEntity, 
  CommentDocumentEntity
} from '../../modules/ppp/data/entities'
import { NotificationsEntity, ShareEntity } from '../../modules/notificactions/data/entities'


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
    CompanyEntity,
    NotificationsEntity,
    ShareEntity,

    // Auth
    AccessEntity,
    AccessRoleEntity,
    RolesEntity,
    RoleUserEntity,
    PPPEntity,
    EvaluationEntity,
    QuestionAnswerEntity,
    PPPDocumentsEntity,
    CommentDocumentEntity
  ],
  logging: false,
  synchronize: true,
  ssl: true
})
