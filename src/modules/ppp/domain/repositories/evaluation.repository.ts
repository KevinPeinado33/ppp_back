import { EvaluationEntity } from '../../data/entities'

export abstract class EvaluationRepository {
    
    abstract getEvaluationsByPPP(idPPP: string): Promise< EvaluationEntity[] >

}
