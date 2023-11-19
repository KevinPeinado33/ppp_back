import { Response } from 'express'
import bcrypt       from 'bcrypt'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { UserRepository } from '../../../auth/domain/repositories'
import { StudentRepository } from '../repositories'
import { StudentCreateOneSelfDto } from '../dtos'
import { generateKey } from '../../../../common/utils/jwt'
import { RolRepository } from '../../../auth/domain/repositories/rol.repository';
import { PPPRepository } from '../../../ppp/domain/repositories'
import { PPPEntity } from '../../../ppp/data/entities'
import { PlanPPPRepository } from '../../../plan/domain/repositories'
import { plainToClass } from 'class-transformer'

export class CreateOneSelfStudentUseCase {

    private HASH_SALT_MAX = 10

    constructor(
        private readonly response          : Response,
        private readonly studentRepository : StudentRepository,
        private readonly userRepository    : UserRepository,
        private readonly studentCreateDto  : StudentCreateOneSelfDto,
        private readonly roleRepository    : RolRepository,
        private readonly pppRepository     : PPPRepository,
        private readonly planPPPRepository : PlanPPPRepository
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

            const roleSelected = 'ebeef04c-2e09-4da1-841a-4015d18aa968'
            
            const roleFound = await this.roleRepository.getRolById( roleSelected )

            await this.userRepository.saveRol(roleFound!, userCreated)

            // TODO: buscando el plan ppp al que se suscribe
            const planPPPFound = await this.planPPPRepository.findById( this.studentCreateDto.planPPP )

            // TODO: agregar el nuevo ppp autocreado por parte del estudiante
            const newPPP = new PPPEntity()

            newPPP.area = this.studentCreateDto.user.area
            newPPP.intershipHours = 0
            newPPP.rate = 0.0
            newPPP.student = studentFound
            newPPP.plan = planPPPFound!

            await this.pppRepository.save( newPPP )

            const token = await generateKey( newUser.id! )

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                info: `Bienvenido ${ userCreated.firstName }.`,
                data: token
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