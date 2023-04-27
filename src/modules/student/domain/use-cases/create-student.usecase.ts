import { Response } from 'express'

import { InternalServerErrorException, NotFoundException } from '../../../../common/responses/errors'
import { StudentCreateEntity } from '../entities'
import { StudentRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/ok/code-status.ok'

export class CreateStudentUseCase {

    constructor(
        private response                   : Response,
        private readonly studentRepository : StudentRepository,
        private studentCreateEntity        : StudentCreateEntity
    ) { }

    async execute () {

        try {

            const studentCreated = await this.studentRepository.create( this.studentCreateEntity )
    
            if ( !studentCreated ) 
                throw new NotFoundException(this.response, 'No se pudo crear.').execute()
    
            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                data: studentCreated
            })

        } catch( error ) {
            throw new InternalServerErrorException(this.response, 'Error al crear al estudiante.').execute()
        }

    }

}
