import { AppDataSource } from "../../../../config/database";
import { PPPDocumentsRepository } from "../../domain/repositories";
import { PPPDocumentsEntity } from "../entities";

export class PPPDocumentsRepositoryImpl implements PPPDocumentsRepository{

    private repository = AppDataSource.getRepository( PPPDocumentsEntity )
    
    constructor(){ }

    async getDocumentsByPPP(idPPP: string): Promise<PPPDocumentsEntity[]> {
        
        return await this
                        .repository
                        .createQueryBuilder('document')
                        .where('document.pppId = :idPPP', {idPPP})
                        .getMany()
    }

}