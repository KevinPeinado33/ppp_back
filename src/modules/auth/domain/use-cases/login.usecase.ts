import { Response } from 'express'
import bcrypt from 'bcrypt'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { generateKey } from '../../../../common/utils/jwt/generate.jwt'

import { UserRepository } from '../repositories'
import { LoginDto } from '../dtos'

export class LoginUseCase {
    
    constructor(
        private readonly response   : Response,
        private readonly loginDto   : LoginDto,
        private readonly repository : UserRepository
    ) { }

    async execute() {

        const { error } = LoginDto.schema.validate( this.loginDto )

        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try {

            const userFound = await this.repository.findUserByEmail( this.loginDto.userName )

            if ( !userFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `El usuario ${ this.loginDto.userName }, no se ha encontrado.`
                })
            }
                
            const isPasswordCorrect = await bcrypt.compare( this.loginDto.password, userFound.password! )

            if ( !isPasswordCorrect ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: 'Contraseña incorrecta.'
                })
            }

            const token = await generateKey( userFound.id! )

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: {
                    ...userFound,
                    token
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
