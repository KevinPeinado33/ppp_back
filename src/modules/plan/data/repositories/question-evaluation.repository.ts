import { AppDataSource } from '../../../../config/database'

import { QuestionEvaluationRepository } from '../../domain/repositories'
import { QuestionEvaluationEntity } from '../entities'

export class QuestionEvaluationRepositoryImpl implements QuestionEvaluationRepository {
    
    private questionRepository = AppDataSource.getRepository( QuestionEvaluationEntity )

    constructor( ) { }
    
    async create(newQuestion: QuestionEvaluationEntity): Promise<QuestionEvaluationEntity> {
        return await this.questionRepository.create( newQuestion )
    }

    async save(questionCreated: QuestionEvaluationEntity): Promise<QuestionEvaluationEntity> {
        return await this.questionRepository.create( questionCreated )
    }

    async findAllById(id: string): Promise<QuestionEvaluationEntity[]> {
        return await this.questionRepository.findBy({ id })
    }

}