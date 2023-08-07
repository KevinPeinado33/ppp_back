import { Request, Response} from 'express'

import { PPPDocumentsRepositoryImpl, PPPRepositoryImpl } from "../../data/repositories";
import { CreatePPPDocumentDto } from "../../domain/dtos";
import { PPPDocumentsRepository, PPPRepository } from "../../domain/repositories";
import { CreatePPPDocumentUseCase } from "../../domain/use-cases";

export class PPPDocumentController{

    private PPPDocumentRepository   :  PPPDocumentsRepository
    private PPPRepository           :  PPPRepository


    constructor(){
        this.PPPDocumentRepository   = new PPPDocumentsRepositoryImpl()
        this.PPPRepository           = new PPPRepositoryImpl()

        this.postCreatePPPDocument  = this.postCreatePPPDocument.bind( this )
    }

    postCreatePPPDocument( req: Request, res: Response){
        const createPPPDocumentDto = req.body as CreatePPPDocumentDto
        const usecase              = new CreatePPPDocumentUseCase(
            res,
            createPPPDocumentDto,
            this.PPPDocumentRepository,
            this.PPPRepository
        )

        usecase.execute()
    }
}