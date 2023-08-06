import { Response } from "express";
import { plainToClass } from "class-transformer";

import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { message } from "../../../../common/responses/msg.response";
import { CreatePPPDocumentDto } from "../dtos";
import { PPPDocumentsRepository, PPPRepository } from "../repositories";
import { PPPDocumentsEntity } from "../../data/entities";


export class CreatePPPDocumentUseCase{

    constructor(
        private readonly response               : Response,
        private readonly createPPPDocumentDto   : CreatePPPDocumentDto,
        private readonly repository             : PPPDocumentsRepository,
        private readonly pppRepository          : PPPRepository
    ) {}

    async execute() {

        const { error } = CreatePPPDocumentDto.schema.validate( this.createPPPDocumentDto)
        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }


        try {

            const pppDocumentInstanced = plainToClass( PPPDocumentsEntity, this.createPPPDocumentDto)
            const newPPPDocument = await this.repository.create( pppDocumentInstanced )

            const pppFound = await this.pppRepository.findOnebyId( this.createPPPDocumentDto.ppp)

            if ( pppFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe el ppp con id #${ this.createPPPDocumentDto.ppp }`
                })
            }

            // newPPPDocument.ppp = pppFound

            const documentCreated = await this.repository.save( newPPPDocument )
            
            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                info: 'Documento registrado correctamente.',
                data: documentCreated
            })
 
        } catch (error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }
    }
}