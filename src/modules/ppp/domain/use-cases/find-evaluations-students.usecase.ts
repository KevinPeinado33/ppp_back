import { EvaluationRepository } from "../repositories/evaluation.repository";

export class FindEvaluationsStudentsUseCase {
    
    constructor(
        private readonly response : Response,
        private readonly repository : EvaluationRepository
    ) {}

    async execute(){
        
    }

}