import { AppDataSource } from "../../../../config/database";
import { EvaluationRepository } from "../../domain/repositories/evaluation.repository";
import { EvaluationEntity } from "../entities/evaluation.entity";

export class EvaluationRepositoryImpl implements EvaluationRepository {
    
    private QUERY_GET_EVALUACIONES = 'select "type", score, created_at, date_end, number_attempts  from evaluation e inner join ppp p on e."pppId" = p.id'
    
    private evaluationRepository = AppDataSource.getRepository( EvaluationEntity)

    constructor(){}

    

}