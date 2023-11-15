import { Response } from 'express'
import bcrypt       from 'bcrypt'

import { message }     from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

import { UserRepository } from '../repositories'
import { CreateUserDto }  from '../dtos'
import { RolRepository } from '../repositories/rol.repository'

export class CreateUserUseCase {

    private HASH_SALT_MAX = 10
    
    constructor(
        private readonly response      : Response,
        private readonly createUserDto : CreateUserDto,
        private readonly repository    : UserRepository,
        private readonly rolRepository : RolRepository
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

            let roleSelected = ''

            const newUser     = await this.repository.create( this.createUserDto )
            newUser.password  = await bcrypt.hash( newUser.password, this.HASH_SALT_MAX )
            const userCreated = await this.repository.save( newUser )

            if ( !this.createUserDto.rolId ) {
                roleSelected = '3ecd30a8-837d-42a7-86b7-7a4ffe115371'
            } else {
                roleSelected = this.createUserDto.rolId
            }

            const roleFound = await this.rolRepository.getRolById( roleSelected )

            await this.repository.saveRol(roleFound!, userCreated)
            
            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                info: 'Usuario creado correctamente.'
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
