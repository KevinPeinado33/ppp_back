import { CreatePPPDoumentDto } from "../dtos";
import { PPPDocumentsRepository } from "../repositories";

export class CreatePPPDocumentUseCase{

    constructor(
        private readonly response           : Response,
        private readonly createPPPDocument  : CreatePPPDoumentDto,
        private readonly repository         : PPPDocumentsRepository,
    ) {}
}