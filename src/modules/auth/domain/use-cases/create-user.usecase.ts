import { Response } from 'express'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

import { UserRepository } from '../repositories'
import { CreateUserDto } from '../dtos'

export class CreateUserUseCase {
    
    constructor(
        private readonly response      : Response,
        private readonly createUserDto : CreateUserDto,
        private readonly repository    : UserRepository
    ) { }

    async execute() {

        const { error } = CreateUserDto.schema.validate( this.createUserDto )

        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try {

            const newUser = await this.repository.create( this.createUserDto )

            const userCreated = this.repository.save( newUser )

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: {
                    ...userCreated,
                }
            })

        } catch(error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }

}