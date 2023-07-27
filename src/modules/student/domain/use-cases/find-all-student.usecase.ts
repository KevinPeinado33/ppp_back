import { Response } from 'express'

import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { message } from '../../../../common/responses/msg.response'
import { StudentRepository } from '../repositories'

export class FindAllStudentUseCase {
    
    constructor(
        private readonly response   : Response,
        private readonly repository : StudentRepository
    ) { }

    async execute() {
        
        try {

            const students = await this.repository.getAllStudents()

            if ( students.length === 0 ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: 'No existen estudiantes aún.'
                })
            }

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: students
            })

        } catch( error ) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }

}