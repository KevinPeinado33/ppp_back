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

    async create(newDocument: PPPDocumentsEntity): Promise<PPPDocumentsEntity> {
        return await this.repository.create( newDocument )
    }

    save(documentCreated: PPPDocumentsEntity): Promise<PPPDocumentsEntity> {
        return this.repository.save( documentCreated )
    }

    findById(id: string): Promise<PPPDocumentsEntity | null> {
        return this.repository.findOneBy({ id })
    }

}