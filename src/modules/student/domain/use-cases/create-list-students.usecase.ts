import { Response } from 'express'
import { plainToClass } from 'class-transformer'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { StudentRepository } from '../repositories'
import { StudentCreateDto } from '../dtos'
import { StudentEntity } from '../../data/entities'

// Persona persona = new Persona('kevin','22')
export class CreateListStudentsUseCase {

    constructor(
        private readonly response  : Response,
        private readonly repository: StudentRepository,
        private readonly students  : StudentCreateDto[]
    ) { }

    execute() {

        try {

            const savePromise = this.students.map( x => {

                const studentInstanced = plainToClass( StudentEntity, x )

                return this.repository.save( studentInstanced )
                
            })

            Promise.all( savePromise )
            
            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                info: 'Estudiantes registrados correctamente!'
            })

        } catch (error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }
    }

}
