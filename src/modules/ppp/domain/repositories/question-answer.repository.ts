import { QuestionAnswerEntity } from "../../data/entities";

export abstract class QuestionAnswerRepository{

    abstract getAnswersByEvaluation(idEvaluation: string): Promise< QuestionAnswerEntity[]>
    abstract create(createQuestionAnswer: QuestionAnswerEntity): Promise< QuestionAnswerEntity >
    abstract save(questionAnswerCreated: QuestionAnswerEntity): Promise< QuestionAnswerEntity >
    abstract findOneById(id:string): Promise< QuestionAnswerEntity | null>
}