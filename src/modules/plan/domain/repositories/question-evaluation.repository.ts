import { QuestionEvaluationEntity } from '../../data/entities'

export abstract class QuestionEvaluationRepository {
    
    abstract create(newQuestion: QuestionEvaluationEntity)   : Promise< QuestionEvaluationEntity >
    abstract save(questionCreated: QuestionEvaluationEntity) : Promise<QuestionEvaluationEntity>
    abstract findAllById(id: string)                         : Promise< QuestionEvaluationEntity[] >

}