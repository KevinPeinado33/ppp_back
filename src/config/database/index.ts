import { DataSource } from 'typeorm'

import { UserEntity } from '../../modules/auth/data/entities'
import { StudentEntity } from '../../modules/student/data/entities'

export const AppDataSource = new DataSource({
    type     : 'postgres',
    host     : process.env.DATABASE_HOST,
    port     : Number(process.env.DATABASE_PORT),
    username : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
    entities : [
        UserEntity,
        StudentEntity
    ],
    logging: true,
    synchronize: true
})
