import { Response } from 'express'

import { StudentCreateEntity } from '../entities'
import { StudentRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response';
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class CreateStudentUseCase {

    constructor(
        private response                   : Response,
        private readonly studentRepository : StudentRepository,
        private studentCreateEntity        : StudentCreateEntity
    ) { }

    async execute () {

        const { error } = StudentCreateEntity.schema.validate( this.studentCreateEntity )

        if ( error )
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: { error: error.message }
            })

        try {

            const studentCreated = await this.studentRepository.create( this.studentCreateEntity )
            
            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                data: studentCreated
            })

        } catch( error ) {

            let info = String(error)

            if (String(error).includes('E11000'))
                info = 'Ya existe un estudiante con este codigo o dni.'

            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info
            })

        }

    }

}
