import { Response } from 'express'

import { StudentRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class GetAllStudentUseCase {

    constructor(
        private response: Response,
        private readonly studentRepository: StudentRepository
    ) { }

    async execute () {
        
        try {

            const students = await this.studentRepository.find()

            if ( !students )
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: 'No hay estudiantes aún.'
                })

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: students
            })

        } catch( error ) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: String(error)
            })
        }

    }

}
