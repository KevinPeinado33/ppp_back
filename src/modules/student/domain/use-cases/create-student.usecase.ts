import { Response } from 'express'
import bcrypt from 'bcrypt'

import { StudentCreateEntity } from '../entities'
import { StudentRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { UserRepository } from '../../../auth/domain/repositories/user.repository'
import { UserCreateEntity } from '../../../auth/domain/entities'

export class CreateStudentUseCase {

    private HASH_SALT_MAX = 10

    constructor(
        private response                   : Response,
        private readonly studentRepository : StudentRepository,
        private readonly userRepository    : UserRepository,
        private studentCreateEntity        : StudentCreateEntity
    ) { }

    async execute () {

        const { error } = StudentCreateEntity.schema.validate( this.studentCreateEntity )

        if ( error )
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })

        try {

            const salt     = await bcrypt.genSalt( this.HASH_SALT_MAX )
            const password = await bcrypt.hash( this.studentCreateEntity.password, salt )

            const userEntity: UserCreateEntity = { ...this.studentCreateEntity, password  }

            const userCreated    = await this.userRepository.create( userEntity )
            const studentCreated = await this.studentRepository.create({
                ...this.studentCreateEntity,
                user: userCreated._id
            })
                        
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
