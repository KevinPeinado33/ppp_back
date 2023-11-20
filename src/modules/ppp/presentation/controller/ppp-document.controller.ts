import { Request, Response} from 'express'

import { CommentDocumentRepositoryImpl, PPPDocumentsRepositoryImpl, PPPRepositoryImpl } from "../../data/repositories";
import { CreateCommentDocumentDto, CreatePPPDocumentDto } from "../../domain/dtos";
import { CommentDocumentRepository, PPPDocumentsRepository, PPPRepository } from "../../domain/repositories";
import { CreatePPPDocumentUseCase, InsertCommentUseCase } from "../../domain/use-cases";
import { DeleteDocumentPPPUsecas } from '../../domain/use-cases/delete-document-ppp.usecase';

export class PPPDocumentController{

    private PPPDocumentRepository   :  PPPDocumentsRepository
    private PPPRepository           :  PPPRepository
    private commentDocumentRepository: CommentDocumentRepository

    constructor(){
        this.PPPDocumentRepository   = new PPPDocumentsRepositoryImpl()
        this.PPPRepository           = new PPPRepositoryImpl()
        this.commentDocumentRepository = new CommentDocumentRepositoryImpl()

        this.postCreatePPPDocument = this.postCreatePPPDocument.bind( this )
        this.postInsertCommentDocument = this.postInsertCommentDocument.bind( this )
        this.deleteDocumentPPP = this.deleteDocumentPPP.bind(this)
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

    postInsertCommentDocument(req: Request, res: Response) {

        const { idDocumentPPP } = req.params
        const payload = req.body as CreateCommentDocumentDto

        const usecase = new InsertCommentUseCase(
            res,
            payload,
            this.commentDocumentRepository,
            idDocumentPPP,
            this.PPPDocumentRepository
        )

        usecase.execute()

    }

    deleteDocumentPPP(req: Request, res: Response) {
        
        const { idPPPDocument } = req.params

        const usecase = new DeleteDocumentPPPUsecas(
            res,
            this.PPPDocumentRepository,
            idPPPDocument
        )

        usecase.execute()

    }

}