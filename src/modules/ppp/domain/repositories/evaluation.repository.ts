import { EvaluationEntity } from '../../data/entities'

export abstract class EvaluationRepository {
    
    abstract getEvaluationsByPPP(idPPP: string): Promise< EvaluationEntity[] >
    abstract create(createEvaluation: EvaluationEntity): Promise< EvaluationEntity >
    abstract save(evaluationCreated: EvaluationEntity): Promise< EvaluationEntity >
    abstract findOneById(id: string): Promise< EvaluationEntity | null >
    abstract getPropertiesEvaluations(): Promise < Map<string, object>[] >

}
