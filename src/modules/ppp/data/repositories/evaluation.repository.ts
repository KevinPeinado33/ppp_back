import { AppDataSource } from '../../../../config/database'

import { EvaluationRepository } from '../../domain/repositories'
import { EvaluationEntity } from '../entities'

export class EvaluationRepositoryImpl implements EvaluationRepository {
    
    private repository = AppDataSource.getRepository( EvaluationEntity )

    constructor(){ }

    async getEvaluationsByPPP(idPPP: string): Promise<EvaluationEntity[]> {
        
        return await this
                        .repository
                        .createQueryBuilder('evaluation')
                        .where('evaluation.pppId = :idPPP', { idPPP })
                        .getMany()

    }

}