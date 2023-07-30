import { PPPDocumentsEntity } from "../../data/entities";

export abstract class PPPDocumentsRepository{
    
    abstract getDocumentsByPPP(idPPP: string): Promise< PPPDocumentsEntity[] >

} 