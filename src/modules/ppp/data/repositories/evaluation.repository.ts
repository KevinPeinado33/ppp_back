import { AppDataSource } from '../../../../config/database'

import { EvaluationRepository } from '../../domain/repositories'
import { EvaluationEntity } from '../entities'

export class EvaluationRepositoryImpl implements EvaluationRepository {
    
    private repository = AppDataSource.getRepository( EvaluationEntity )

    constructor(){ }

    async findOneById(id: string): Promise<EvaluationEntity | null> {
        return await this.repository.findOneBy({id})
    }
    
    async create(createEvaluation: EvaluationEntity): Promise<EvaluationEntity> {
        return await this.repository.create(createEvaluation)
    }

    async save(evaluationCreated: EvaluationEntity): Promise<EvaluationEntity> {
        return await this.repository.save(evaluationCreated)
    }

    async getEvaluationsByPPP(idPPP: string): Promise<EvaluationEntity[]> {
        
        return await this
                        .repository
                        .createQueryBuilder('evaluation')
                        .where('evaluation.pppId = :idPPP', { idPPP })
                        .getMany()

    }

}