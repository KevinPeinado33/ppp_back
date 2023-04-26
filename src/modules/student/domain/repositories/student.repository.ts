import { IStudent } from '../../data/interfaces'
import { StudentCreateEntity, StudentUpdateEntity } from '../entities'

export interface StudentRepository {

    find()                                     : Promise< IStudent[] >
    create(createStudent: StudentCreateEntity) : Promise< IStudent >
    /* update(updateStudent: StudentUpdateEntity) : Promise< IStudent > */
    findByCode(codeStudent: string)            : Promise< IStudent | null >

}