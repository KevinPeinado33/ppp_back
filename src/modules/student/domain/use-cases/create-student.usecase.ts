import { Response } from 'express'
import { validate } from 'class-validator'

import { StudentCreateEntity } from '../entities'
import { StudentRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class CreateStudentUseCase {

    constructor(
        private response                   : Response,
        private readonly studentRepository : StudentRepository,
        private studentCreateEntity        : StudentCreateEntity
    ) { }

    async execute () {

        const errors = await validate( this.studentCreateEntity )

        if ( errors.length > 0 ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: errors
            })
        }

        try {

            const studentCreated = await this.studentRepository.create( this.studentCreateEntity )
            
            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                data: studentCreated
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
