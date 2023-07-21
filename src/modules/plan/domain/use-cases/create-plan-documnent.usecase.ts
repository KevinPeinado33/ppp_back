import { Response } from 'express'
import { plainToClass } from 'class-transformer'

import { CreatePlanDocumentDto } from '../dtos'
import { PlanDocumentRepository, PlanPPPRepository, TypeDocumentRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { PlanDocumentEntity } from '../../data/entities'
import { cloud } from '../../../../common/utils/cloud'

export class CreatePlanDocumentUseCase {

    constructor(
        private readonly reponse               : Response,
        private readonly createPlanDocumentDto : CreatePlanDocumentDto,
        private readonly repository            : PlanDocumentRepository,
        private readonly typeRepository        : TypeDocumentRepository,
        private readonly planRepository        : PlanPPPRepository
    ) { }

    async execute() {
        
        const { error } = CreatePlanDocumentDto.schema.validate( this.createPlanDocumentDto )
        
        if ( error ) {
            return message({
                response: this.reponse,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try {

            const planDocumentInstanced = plainToClass(PlanDocumentEntity, this.createPlanDocumentDto)
            const newPlanDocument       = await this.repository.create( planDocumentInstanced )
            
            const typeFound = await this.typeRepository.findOneById( this.createPlanDocumentDto.type )
            
            if ( !typeFound ) {
                return message({
                    response: this.reponse,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe el tipo con id #${ this.createPlanDocumentDto.type }`
                })
            }
            
            const planFound = await this.planRepository.findById( this.createPlanDocumentDto.planPPP )

            if ( !planFound ) {
                return message({
                    response: this.reponse,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe el plan con id #${ this.createPlanDocumentDto.planPPP }`
                })
            }

            console.log('Ante de iniciar cloudinary')

            const cloudinary       = cloud.setup
            const documentUploaded = await cloud.uploadDocument({ 
                cloudinary, 
                documentB64: this.createPlanDocumentDto.documentB64, 
                nameDocument: this.createPlanDocumentDto.name 
            })

            console.log('Documento converito', documentUploaded)

            newPlanDocument.type    = typeFound
            newPlanDocument.planPPP = planFound

            // const documentCreated = await this.repository.save( newPlanDocument )

            console.log(documentUploaded)

            message({
                response: this.reponse,
                code: CODE_STATUS.CREATED,
                info: 'Documento registrado correctamente.',
                data: { documentUploaded }
            })

        } catch( error ) {
            message({
                response: this.reponse,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error 
            })
        }
        
    }

}
