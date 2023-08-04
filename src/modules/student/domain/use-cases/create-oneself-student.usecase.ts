import { Response } from 'express'
import bcrypt       from 'bcrypt'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { UserRepository } from '../../../auth/domain/repositories'
import { StudentRepository } from '../repositories'
import { StudentCreateOneSelfDto } from '../dtos'

export class CreateOneSelfStudentUseCase {

    private HASH_SALT_MAX = 10

    constructor(
        private readonly response          : Response,
        private readonly studentRepository : StudentRepository,
        private readonly userRepository    : UserRepository,
        private readonly studentCreateDto  : StudentCreateOneSelfDto
    ) { }

    async execute() {

        const { error } = StudentCreateOneSelfDto.schema.validate( this.studentCreateDto )

        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error
            })
        }
        
        try {
            
            const studentFound = await this.studentRepository.findOneByCode( this.studentCreateDto.code, false )

            if ( !studentFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: `Aún no estas autorizado para hacer tus practicas.`
                })
            }

            const newUser    = await this.userRepository.create( this.studentCreateDto.user )
            newUser.password = await bcrypt.hash( newUser.password, this.HASH_SALT_MAX )
            newUser.status   = true

            const userCreated = await this.userRepository.save( newUser )

            studentFound.cycle  = this.studentCreateDto.cycle
            studentFound.nameCv = this.studentCreateDto.nameCv!
            studentFound.urlCv  = this.studentCreateDto.urlCv!
            studentFound.user   = userCreated

            await this.studentRepository.save( studentFound )

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                info: `Bienvenido ${ userCreated.firstName }.`
            })

        } catch( error ) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }

}