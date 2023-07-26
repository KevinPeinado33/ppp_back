import { AppDataSource } from '../../../../config/database'

import { StudentRepository } from '../../domain/repositories'
import { StudentEntity } from '../entities'

export class StudentRepositoryImpl implements StudentRepository {

    private readonly repository = AppDataSource.getRepository( StudentEntity )

    constructor() { }

    async getAllStudents(): Promise< StudentEntity[] > {
        return await this.repository.find()
    }

}