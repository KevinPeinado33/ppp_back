import { PPPDocumentsEntity } from "../../data/entities"

export abstract class PPPDocumentsRepository {
    
    abstract getDocumentsByPPP(idPPP: string)           : Promise< PPPDocumentsEntity[] >
    abstract create(newDocument: PPPDocumentsEntity)    : Promise< PPPDocumentsEntity >
    abstract save(documentCreated: PPPDocumentsEntity)  : Promise< PPPDocumentsEntity >
    abstract findById(id: string)                       : Promise< PPPDocumentsEntity | null >

} 