import { Response } from 'express'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { PlanDocumentRepository, PlanPPPRepository, TypeDocumentRepository } from '../repositories'
import { CreatePlanPPPDto } from '../dtos'
import { plainToClass } from 'class-transformer'
import { PlanDocumentEntity, PlanPPPEntity } from '../../data/entities'
import { UserRepository } from '../../../auth/domain/repositories'

export class CreatePlanPPPUseCase {

    private LIST_IS_EMPTY = 0

    constructor(
        private readonly response         : Response,
        private readonly createPlanPPPDto : CreatePlanPPPDto,
        private readonly repository       : PlanPPPRepository,
        private readonly userRepository   : UserRepository,
        private readonly typeRepository   : TypeDocumentRepository,
        private readonly documentRepoitory: PlanDocumentRepository

    ) { }

    async execute() {
        
        const { error } = CreatePlanPPPDto.schema.validate( this.createPlanPPPDto )

        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try {

            const planPPPInstanced = plainToClass( PlanPPPEntity, this.createPlanPPPDto )
            const newPlanPPP       = await this.repository.create( planPPPInstanced )

            const userFound        = await this.userRepository.findById( this.createPlanPPPDto.commited )
            
            if ( !userFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: `No se encontró usuario con id #${ this.createPlanPPPDto.commited }`
                })
            }

            newPlanPPP.commited = userFound

            const planPPPCreated = await this.repository.save( newPlanPPP )


            /**
             * En caso de que me manden la lista de documentos realizamos su proceso
             * de insersión.
             */
            if ( this.createPlanPPPDto.documents.length !== this.LIST_IS_EMPTY ) {

                Promise.all( this.createPlanPPPDto.documents.map( async document => {

                    const documentPrepared = plainToClass(PlanDocumentEntity, document)
                    
                    const documentInstanced = await this.documentRepoitory.create( documentPrepared )

                    const typeDocumentFound = await this.typeRepository.findOneById( document.type )

                    if ( !typeDocumentFound ) {
                        return message({
                            response: this.response,
                            code: CODE_STATUS.NOT_FOUND,
                            info: 'No existe el tipo de documento mandado!'
                        })
                    }

                    documentInstanced.type = typeDocumentFound
                    documentInstanced.planPPP = planPPPCreated

                    await this.documentRepoitory.save( documentInstanced )

                }))

            }

            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                info: 'Plan de PPP creado correcamente',
                data: planPPPCreated
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
