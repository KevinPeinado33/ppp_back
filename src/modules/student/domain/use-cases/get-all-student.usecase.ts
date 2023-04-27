import { Response } from 'express'

import { InternalServerErrorException, NotFoundException } from '../../../../common/responses/errors'
import { StudentRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/ok/code-status.ok'

export class GetAllStudentUseCase {

    constructor(
        private response: Response,
        private readonly studentRepository: StudentRepository
    ) { }

    async execute () {
        
        try {

            const students = await this.studentRepository.find()

            console.log({ students })

            if ( !students )
                throw new NotFoundException(this.response, 'No hay estudiantes.').execute()

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: students
            })

        } catch( error ) {
            throw new InternalServerErrorException(this.response, 'Error al intentar obtener los estudiantes.').execute()
        }

    }

}
