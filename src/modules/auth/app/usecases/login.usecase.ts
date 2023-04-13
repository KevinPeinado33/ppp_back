import { Response } from 'express'

import { UserRepository } from '../../domain/repositories'
import { NotFoundException } from '../../../../common/responses/errors'
import { message } from '../../../../common/responses/msg.response'
import { LoginDto } from '../dtos'

export class LoginUseCase {
    
    constructor(
        private readonly response   : Response,
        private readonly loginDto   : LoginDto,
        private readonly repository : UserRepository
    ) { }

    async execute() {

        const userFound = await this.repository.findUserByEmail( this.loginDto.email )

        if ( !userFound ) {

            throw new NotFoundException(this.response, 'No existe usuario con este email.').execute()

        }

        delete userFound.password

        message({
            response: this.response,
            code: 201,
            data: {
                ...userFound,
                token: 'ESTO ES UN TOKEN PE'
            }
        })

    }

}
