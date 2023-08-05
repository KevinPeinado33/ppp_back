import { Response } from 'express'
import bcrypt from 'bcrypt'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { generateKey } from '../../../../common/utils/jwt'

import { UserRepository } from '../repositories'
import { LoginDto } from '../dtos'
import { UserEntity } from '../../data/entities'

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

            if ( !userFound.status ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: 'El usuario está desactivado.'
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

            const permissionsFound = await this.repository.findByIdWithRolesAndAccess( userFound.id! )

            if ( !permissionsFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: `No tienes roles, contacta al admin.`
                })
            }

            const { roles, accesses }            = this.extractRolesAndAccessFromJson( permissionsFound )
            const { password, ...restUserFound } = userFound

            const token = await generateKey( userFound.id! )

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                info: `Bienvenido ${ userFound.firstName }`,
                data: {
                    ...restUserFound,
                    token,
                    roles,
                    accesses
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

    extractRolesAndAccessFromJson( data: UserEntity ): { roles: IRole[], accesses: IAccess[] } {

        let roles   : IRole[]   = []
        let accesses: IAccess[] = []

        // Tiene roles este usuario?
        if ( data.roleUser ) {

            data.roleUser.forEach( ({ role }: any) => {

                roles.push({
                    name       : role[0].name,
                    description: role[0].description
                })
    
                // Tiene accessos esos roles?
                if ( role[0].accessRoles ) {

                    role[0].accessRoles.forEach( ({ access }: any) => {
                                
                        accesses.push({
                            path: access[0].path,
                            name: access[0].name,
                            icon: access[0].icon
                        })
                        
                    })

                }    
    
            })   

        }

        return { roles, accesses }

    }

}

interface IRole {
    name       : string
    description: string
}

interface IAccess {
    path: string
    name: string
    icon: string
}
