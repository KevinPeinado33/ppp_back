import { QuestionAnswerEntity } from "../../data/entities";

export abstract class QuestionAnswerRepository{

    abstract getAnswersByEvaluation(idEvaluation: string): Promise< QuestionAnswerEntity[]>

}