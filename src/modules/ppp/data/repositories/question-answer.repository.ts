import { AppDataSource } from "../../../../config/database";

import { QuestionAnswerRepository } from "../../domain/repositories";
import { QuestionAnswerEntity } from "../entities";

export class QuestionAnswerRepositoryImpl implements QuestionAnswerRepository{

    private repository = AppDataSource.getRepository( QuestionAnswerEntity)

    constructor(){}
    async create(createQuestionAnswer: QuestionAnswerEntity): Promise<QuestionAnswerEntity> {
        return await this.repository.create(createQuestionAnswer)
    }
    
    async save(questionAnswerCreated: QuestionAnswerEntity): Promise<QuestionAnswerEntity> {
        return await this.repository.save(questionAnswerCreated)
    }

    async getAnswersByEvaluation(idEvaluation: string): Promise<QuestionAnswerEntity[]>{

        return await this 
                        .repository
                        .createQueryBuilder('answer')
                        .where('answer.evaluationsId = :idEvaluation', { idEvaluation })
                        .getMany() 
    }
}